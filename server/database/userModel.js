const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
    addUser,
    getUser,
    getUsers,
    getUserByDepartment
}

function addUser(users){
    return db('users').insert(users)
}
function getUsers(id){
    if(id){
        return db('users').where({id})
    }
    else {
        return db('users')
    }
}

function getUser(username){
    return db('users').where({ username })
}

function getUserByDepartment(department){
    return db('users').where({  department })
}

