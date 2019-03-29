module.exports = function(sequelize, DataTypes) {
  var information = sequelize.define("information", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique :true,
      validate:{
        isEmail : true
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 5,
          msg: "Name must be atleast 5 characters in length"
      },
    },
  }
});
var characters = sequelize.define("characters", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class_race: {
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
  return information, characters;
};