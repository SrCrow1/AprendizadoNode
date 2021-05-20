const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Porta 8081")
});

app.get("/sobre", function(req,res){
    res.send("Sobre")
});

app.get("/blog", function(req,res){
    res.send("blog")
});

app.get("/ola/:nome", function(req,res){
    res.send(req.params)
});

app.listen(8081, function(){
    console.log("Servidor rodando na localhost 8081");
});

