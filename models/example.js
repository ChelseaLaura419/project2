
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var newCharacter = sequelize.define("newCharacter", {
  name: Sequelize.STRING,
  class: Sequelize.STRING,
  age: Sequelize.INTEGER,
  class: Sequelize.STRING,
  height: Sequelize.STRING,
  strength: Sequelize.STRING,
  weakness: Sequelize.STRING,
  description: Sequelize.STRING,
  photo: Sequelize.STRING,
    });
  


newCharacter.sync();


module.exports = newCharacter;





// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };
