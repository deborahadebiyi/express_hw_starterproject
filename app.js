var express = require('express');
var app = express();
var swaggerJsDocs = require('swagger-jsdoc');
var swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {  //contains information about the application
        info: {
            title: 'Simple Express App',
            version: '1.0.0',
            description: 'A simple api to familiarise myself with LEGO tools'
        }
    },
    apis: ['app.js'] // where the documentation is taken from. Can also provide multiple file
    //names if express api is distributed amongst multiple files
};

const swaggerDocs = swaggerJsDocs(swaggerOptions); //uses the dependency to load the docs by using the swaggerOptions

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); // provides the api spec via an api route

/*below is a jsDoc comment 
the first annotation indicates swagger is being used
provide the route
provide the method
provide a description of what the api does
provide responses expected and a brief description
if you console.log(swaggerDocs) you see in the terminal the object created which includes the api spsecification */

/**
 * @swagger
 * /health:
 *      get:
 *          description: Shows healthcheck message
 *          responses:
 *              200:
 *                  description: Success
 */

app.get('/', function(req,res){
    res.send('Hello World');
})

app.get('/health', function(req,res){
    res.status(200).send('OK');
})


app.listen(3000);

module.exports = app;