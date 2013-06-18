var server  = require('../server')
  , restify = require('restify');

module.exports.client = restify.createJsonClient({
  url: 'http://127.0.0.1:' + server.config.port,
  version: '*'
});
