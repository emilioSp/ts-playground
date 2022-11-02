import { Knex, knex } from 'knex';

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    database: 'mydb',
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    port: 5432,
  },
  pool: {
    min: 1,
    max: 10,
  },
  debug: process.env.NODE_ENV === 'development',
};

const pgDB = knex(dbConfig);

export default pgDB;
