var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World');
})

app.get('/health', function(req,res){
    res.status(200).send('OK');
})

app.listen(3000, function(){
    console.log('App listening on localhost:3000');
})

module.exports = app;