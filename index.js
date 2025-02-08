// index.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const https = require("https");
const http = require("http");

// const swaggerDocument = require('./swagger.json');
// const swaggerDocument = YAML.load('openapi.yaml');
const swaggerDocument = YAML.load('linkplay.yaml');
// console.log(swaggerDocument);

const app = express();
const port = 3000;

const deviceHost = "192.168.1.196";

// Redirect root to /api-docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Proxy requests to WiiM/Linkplay device
app.use("/proxy", (req, res) => {
  console.log(deviceHost);
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.body);
  // const http_handler = getProtocol(req) == 'http' ? http : https;
  const http_client = https.request({
    host: deviceHost,
    path: req.url,
    method: req.method,
    rejectUnauthorized: false,
    headers: req.headers,
    body: req.body
  }, (resp) => {
    res.writeHead(resp.statusCode, resp.headers);
    resp.pipe(res);
  });

  req.pipe(http_client);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger UI is running on http://localhost:${port}/api-docs`);
});