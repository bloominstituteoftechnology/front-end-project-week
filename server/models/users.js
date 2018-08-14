'use strict'
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define(
    'Users',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [ 4, 20 ],
            msg: 'username must between 4 to 20 characters long'
          }
        }
      },
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
