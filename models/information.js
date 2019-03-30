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

  return information;
};