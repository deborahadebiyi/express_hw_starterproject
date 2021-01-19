const express = require('express');
const openApiValidator = require('express-openapi-validator');
const bodyParser = require('body-parser');
const path = require('path');
const yamlJs = require('yamljs');
const app = express();
// const books = require('./bookObject');
const swaggerUI = require('swagger-ui-express');
const bookRouter = require('./src/routes/books');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));
// const apiSpec = path.join(__dirname, `api.yml`);
const apiSpec = yamlJs.load('./api.yml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiSpec)); // provides the api spec via an api route

app.use(
    openApiValidator.middleware({
        apiSpec,
        // validateRequests: true,
        validateResponses: true,
    }),
);


//error handler
app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

  //route setup
app.use('/', bookRouter);


module.exports = app;