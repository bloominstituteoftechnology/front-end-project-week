const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports ={
    addNote,
    getNotes,
    deleteNote,
    editeNote,
}

function addNote(note){
    return db('notes').insert(note)
}

function getNotes(id){
    if(id){
        return db('notes').where({ id })
    }
    return db("notes")
}

function editeNote(id, note){
    return db('notes').where({ id }).update( note )
}

function deleteNote(id){
    return db('notes').where({ id }).del()
}