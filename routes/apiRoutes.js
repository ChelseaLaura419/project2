var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/", function(req, res) {
    db.information.findAll({}).then(function(data) {
      res.json(data);
    });
  });



  app.post("/api/user", function(req, res) {
    db.information.create(req.body).then(function(data) {
      res.redirect("/character");
      
    });
  });

  app.post("/api/character", function (req, res) {
    db.characters.create({
      name: req.body.name,
      class: req.body.class,
      age: req.body.age,
      height: req.body.height,
      strength: req.body.strength,
      weakness: req.body.weakness,
      description: req.body.description,
    }).then(function (players) {
     res,redirect("/squad");
   });
 });


  app.get("/api/team", function (req, res) {
    db.characters.findAll(req.body).then(function(team) {
      res.json(team);
    });
  });

};










  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
//   });
