var express = require('express');
var app = express();
var requestIp = require('request-ip');
var url = '/api/whoami';
app.get(url, function(req, res) {
	var ip = requestIp.getClientIp(req);
	var lang = req.get("accept-language");
	lang = lang.substring(0, lang.indexOf(","));
	var os = req.get("user-agent");
	os = os.substring(os.indexOf("(")+1, os.indexOf(")"))
	var r = {
		ipaddress: ip,
		language: lang,
		software:os
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