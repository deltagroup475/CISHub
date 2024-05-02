var ParseHub = require('parsehub');
var api = new ParseHub('t14xbF1sSzEU');

var request = require('request');

request({
    uri: 'https://www.parsehub.com/api/v2/runs/twH_u1MsjoDu',
    method: 'GET',
    qs: {
        api_key: "t14xbF1sSzEU"
    }
}, function(err, resp, body) {
     console.log(body);
    });