var restify = require('restify')
  , _       = require('underscore')._
  , http    = require('http')
  , routes  = require('./routes');


var app = module.exports = restify.createServer();

app.run = function(config){
  var config = _.extend({
      port: 3000
    , home: __dirname 
    , env : 'development'
  }, config);
  
  app.ReponseMessage = function(code , data) {
    return {
      code : code,
      data : data
    }
  };
  app.CONST = {
    errorCode : {
      NO_ERROR : 'NoError'
    }
  }

  app.pre(function(req, res, next) {
    return next();
  });

  routes(app);

  app.listen(config.port , function(){
    console.log("Restify server listening on port " + config.port + " in " + config.env + " mode");
  });
}
