var newCharacter = require("../models/character.js");



module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    newCharacter.findAll({}).then(function(results) {
      res.json(results);
    });

  });

  app.post("/api/new", function(req, res) {

    console.log(req.body);
  
    newCharacter.create({
        name: req.body.name,
        class: req.body.class,
        age: req.body.age,
        class: req.body.class,
        height: req.body.height,
        strength: req.body.strength,
        weakness: req.body.weakness,
        description: req.body.description,
        photo: req.body.photo
    }).then(function(results) {
      res.end();
    });

  });

};
//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
