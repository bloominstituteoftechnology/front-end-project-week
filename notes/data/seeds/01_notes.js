const content = 'insert random note content here'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'note1', textBody: content},
        {title: 'note2', textBody: content},
        {title: 'note3', textBody: content}
      ]);
    });
};
