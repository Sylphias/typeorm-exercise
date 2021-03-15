//https://github.com/typeorm/typeorm/issues/5308

module.exports = [
   {
     type: 'postgres',
     host: 'localhost',
     port: 5433,
     username: 'postgres',
     password: 'password',
     database: 'test',
     synchronize: false,
     logging: false,
     entities: [
        'src/entities/*.entity.{ts,js}'
     ],
     migrations: [
        'src/migrations/**/*{.ts,.js}'
     ],
   //   subscribers: [],
   //   seeds: [],
   //   factories: [],
     cli: {
       entitiesDir:'src/entities' ,
       migrationsDir: 'src/migrations',
       subscribersDir: 'src/subscribers',
     },
   },
 ];
 