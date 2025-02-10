// Description: This file is the entry point for the application. 
// It creates an express app that serves the Swagger UI and proxies requests to the WiiM/Linkplay device.

// Load required modules
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const http = require("http");
const https = require("https");

// Load config and swagger document
const config = YAML.load("config.yaml");
const swaggerDocument = YAML.load("openapi.yaml");

// Create express app on port 3000
const app = express();
const port = 3000;

// Redirect root to /api-docs
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Proxy requests to WiiM/Linkplay device
app.use("/proxy", (req, res) => {
  // Translate the /proxy uri to the corresponding /httpapi.asp?command=
  let reqUrl = req.url;
  reqUrl = reqUrl.replace("/", "/httpapi.asp?command=");
  console.log("Call:", "https://" + config.deviceHost + reqUrl);

  // Create a new HTTP client to forward the request to the WiiM/Linkplay device
  const http_client = https.request({
    host: config.deviceHost,
    path: reqUrl,
    method: req.method,
    rejectUnauthorized: false, // Ignore self-signed certificate
    headers: req.headers,
    body: req.body
  }, (resp) => {
    // Forward the header response from the WiiM/Linkplay device
    res.writeHead(resp.statusCode, resp.headers);
    resp.pipe(res);
  });

  // Forward the body of the request to the WiiM/Linkplay device
  req.pipe(http_client);
  
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});