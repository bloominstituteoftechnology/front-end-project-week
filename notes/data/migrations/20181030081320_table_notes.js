
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
      table.increments("_id")
      table.string('title').notNullable()
      table.string('textBody').notNullable()
      table.string('tags')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
};
