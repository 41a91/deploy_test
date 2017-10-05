var express = require('express');
var app = express();

app.set("view engine","ejs");

var port = process.env.PORT || 3000;

app.all("/",function(req, res, next)
{
    console.log("Getting secret stuff");
    next();
});

app.get('/', function(req, res){
    res.render("index");
});
app.get('/users', function(req, res){
    res.send('get request for all users');
});

app.post("/",function(req,res)
{

    res.send("Post request to root server");

});

app.listen(port);