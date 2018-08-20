const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports ={
    addNote,
    getNotes,
    deleteNote,
    editeNote,
    getNote
}