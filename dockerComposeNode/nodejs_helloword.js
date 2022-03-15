var express = require('express');
var app = express();

app.get('/', function (req, res){
	res.send('Hello world! (docker compose)');
});

app.listen(8080, function() {
	console.log('Listen in port 8080');
});
