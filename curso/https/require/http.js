var http = require('http');
var exp = require('express')

http.createServer(function(req, res){
    res.end("ola")
}).listen(8081);

console.log("O servidor rodando!!")