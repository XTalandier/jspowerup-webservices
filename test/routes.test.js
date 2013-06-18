var client = require('./client.js').client;

describe('Routes', function() {
  describe('#Public' , function(){
    it("should always return a value" , function(done){
      client.post(
        '/i-am-pretty-sure-this-uri-does-not-exists'
        , function(err, req, res, data) {
          data.code.should.equal('ResourceNotFound');
          done();
      });
    });
    it("should be served at /login" , function(done){
      client.post(
        '/login'
        , {email : '' , password : ''}
        , function(err, req, res, data) {
          data.code.should.not.equal('ResourceNotFound');
          done();
      });
    });
    it("should be served at /register" , function(done){
      client.post(
        '/register'
        , {email : '' , password : ''}
        , function(err, req, res, data) {
          data.code.should.not.equal('ResourceNotFound');
          done();
      });
    });
  });
});
