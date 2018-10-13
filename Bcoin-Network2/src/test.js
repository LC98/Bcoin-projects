var WebAPI = require('./src/webapi');

var api = new WebAPI();

api.getNetworkInfo().then(info => console.log(info));
