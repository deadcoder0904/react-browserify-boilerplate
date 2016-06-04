var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/',function(req,res){
	res.send('index.html');
});

app.get('/todos',function(req,res) {
	res.json([{"name":"Akkira"},{"name":"Fakkira"}]);
});

app.listen('3000',function(req,res){
	console.log('Magic @ localhost:3000');
});
