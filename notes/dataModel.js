const db = require('./configs/notesDbConfig.js')
const table = 'notes'

module.exports = {
    findAll,
    findById,
    addNotes,
    editNote,
    deleteNote
}

function findAll(){
    return db(table)
}

function findById(id){
    return db(table).where({id})
}

function addNotes(newNote){
    return db(table).insert(newNote)
}

function editNote(id, newNote){
    return db(table).where({id}).update(newNote)
}

function deleteNote(id){
    return db(table).where({id}).del()
}
