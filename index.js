// index.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// const swaggerDocument = require('./swagger.json');
// const swaggerDocument = YAML.load('openapi.yaml');
const swaggerDocument = YAML.load('linkplay.yaml');
// console.log(swaggerDocument);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger UI is running on http://localhost:${port}/api-docs`);
});