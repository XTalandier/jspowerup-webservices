var app = require('./app/app')


if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test'){
};

var config = {
    port: 3000
  , home: process.cwd() + '/app'
};

module.exports.config = config;
// run HTTP Server
exports.app = app.run(config);
