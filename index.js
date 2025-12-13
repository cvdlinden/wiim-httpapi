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

// Normalize device list from config and log configured device hosts
const devices = config.deviceHosts || [];
console.log("The following devices have been configured for the proxy:");
devices.forEach((device, idx) => {
  console.log(`  [${idx}] ${device.name}: ${device.ip}`);
});

// Create express app on port 3000
const app = express();
const port = 3000;

// Inject device-specific servers into the OpenAPI document so Swagger UI
// shows a server entry for each configured device. Each server points at our
// local proxy and passes a `device` parameter with the device index.
if (Array.isArray(devices) && devices.length > 0) {
  swaggerDocument.servers = devices.map((d, i) => ({
    url: `http://localhost:${port}/proxy/${i}`,
    description: `${d.name} (${d.ip})`
  }));
}

// Redirect root to /api-docs
app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

var options = {
  swaggerOptions: {
    // tagsSorter: "alpha",
    // apisSorter: "alpha",
    operationsSorter: "alpha"
  }
};

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Proxy requests to WiiM/Linkplay device
app.use("/proxy", (req, res) => {

  // Translate the /proxy uri to the corresponding device and /httpapi.asp?command=
  // Since req.url is in the format /{idx}}/{command}, we need to split the index and command
  // The index will resolve to the device to target
  // The command will be passed to the device unaltered
  let reqUrl = req.url;
  const targetIndex = reqUrl.split("/")[1];
  const commandPath = "/httpapi.asp?command=" + reqUrl.split("/").slice(2).join("/");

  // Determine which device to target based on the selected server; default to index 0.
  const deviceIndex = Number.isFinite(Number(targetIndex)) ? Number(targetIndex) : 0;
  const target = devices[deviceIndex] || devices[0];
  if (!target) {
    return res.status(500).send("No device configured");
  }

  console.log("Call [" + target.name + "]:", "https://" + target.ip + commandPath);

  // Create a new HTTPS client to forward the request to the WiiM/Linkplay device
  const https_client = https.request({
    host: target.ip,
    path: commandPath,
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
  req.pipe(https_client);

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});