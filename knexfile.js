// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './notes/data/notesDb.sqlite3'
    },
    migrations: {
      directory: './notes/data/migrations'
    },
    seeds: {
      directory: './notes/data/seeds'
    },
    useNullasDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './notes/data/notesDbTest.sqlite3'
    },
    migrations: {
      directory: './notes/data/migrations'
    },
    seeds: {
      directory: './notes/data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
