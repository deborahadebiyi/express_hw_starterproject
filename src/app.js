const express = require('express');
const openApiValidator = require('express-openapi-validator');
const yamlJs = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const bookRouter = require('./routes/books');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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