module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'freedb.tech',
      user : 'freedbtech_isquierdoads',
      password : '12345',
      database : 'freedbtech_futebolavenida'
    },
    migrations: {
      tableName: 'migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }        
  }

};
