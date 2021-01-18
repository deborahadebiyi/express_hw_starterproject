const express = require('express');
const openApiValidator = require('express-openapi-validator');
const bodyParser = require('body-parser');
const path = require('path');
const yamlJs = require('yamljs');
const app = express();
const books = require('./books');
const swaggerUI = require('swagger-ui-express');

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

// app.get('/', function(req,res){
//     res.send('Hello World');
// })

app.get('/health', function(req,res){
    console.log("Hello there");
    res.status(200).json({ status: 'OK' })
})

//error handler
app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });


//returns book that was created
app.post('/books', function(req,res){
    res.status(201).json([{book}]);
})

//returns a single book based on the id
app.get('/book/:book_id', function(req,res){
    res.status(200).send([{book}]);
})

//lists all books
app.get('/books', function(req,res){
    res.status(200).json([{books}]);
})

//deletes a book
app.delete('/book/:book_id', function(req,res){
    res.status(204).send('Book sucessfully removed');
})



module.exports = app;