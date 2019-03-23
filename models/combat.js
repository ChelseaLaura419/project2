module.exports = function(sequelize, DataTypes) {
  var combat = sequelize.define("combat", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return combat;
};

