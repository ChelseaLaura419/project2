module.exports = function(sequelize, DataTypes) {
var characters = sequelize.define("characters", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  strength: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weakness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type:DataTypes.STRING,
    allowNull: false,
  },
});
return characters;
}