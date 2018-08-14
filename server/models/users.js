'use strict'
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define(
    'Users',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  )
  Users.associate = function (models) {
    // associations can be defined here
    Users.hasMany(models.Notes)
  }
  return Users
}
