var express = require('express');
var app = express();
var url='/api/whoami';
app.get(url, function(req, res) {
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	var r = {
		ipaddress: ip,
		language: req.get("accept-language"),
		software: req.get("user-agent")
	};
	console.log(JSON.stringify(req.headers));
	res.send(r);
});

app.get('/', function(req, res) {
		res.redirect(url);
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});