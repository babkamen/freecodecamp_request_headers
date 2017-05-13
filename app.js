var express = require('express');
var app = express();
var moment = require('moment');

app.get('/api/whoami', function(req, res) {
	var r = {
		ipaddress: JSON.stringify(req.headers),
		language: req.get("accept-language"),
		software: "Windows NT 6.1; Win64; x64"
	};
	console.log(JSON.stringify(req.headers));
	res.send(r);
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});