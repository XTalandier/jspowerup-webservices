var Public = module.exports = function(app){
  app.get('/' , function(req , res , next){
    res.send(500 , {data:'ok'});
    return next();
  });
  app.post('/login' , function(req , res , next){
    res.send(app.ReponseMessage(app.CONST.errorCode.NO_ERROR , {value:'ok'}));
    return next();
  });
  app.post('/register' , function(req , res , next){
    res.send(app.ReponseMessage(app.CONST.errorCode.NO_ERROR , {value:'ok'}));
    return next();
  });

}