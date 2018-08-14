'use strict'
module.exports = (sequelize, DataTypes) => {
  var Notes = sequelize.define(
    'Notes',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {}
  )
  Notes.associate = function (models) {
    // associations can be defined here
    Notes.belongsTo(models.Users)
  }
  return Notes
}
