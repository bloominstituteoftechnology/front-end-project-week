
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users =>{
      users.increments()
      users.string('first_name', 128).notNullable()
      users.string('last_name', 128).notNullable()
      users.string('email', 255).notNullable().unique()
      users.string('username', 128).notNullable().unique()
      users.password('password', 128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTable('users')
};
