module.exports = {
    up: function (migration, DataTypes , done) {
        migration.createTable(
            'Users', {
            id  : {
              type : DataTypes.INTEGER ,
              autoIncrement : true ,
              primaryKey    : true
            } ,
            nickname  : DataTypes.STRING ,
            email     : DataTypes.STRING ,
            passwd    : DataTypes.STRING ,
            token     : DataTypes.STRING ,
            createdAt : DataTypes.DATE   ,
            updatedAt : DataTypes.DATE
        }, {
            engine: 'InnoDB', // default: 'InnoDB'
            charset: 'latin1' // default: null
        });
        done();
    },
    down: function (migration, DataTypes, done) {
      migration.dropTable('Users');
      done();
    }
}
