var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/", function(req, res) {
    db.information.findAll({}).then(function(data) {
      res.json(data);
    });
  });



  app.post("/api/user", function(req, res) {
    db.information.create({
      firstName: req.inputFirstName,
      lastName: req.inputLastName,
      email: req.inputEmail,
      password: req.inputPassword,
    }).then(function(data) {
      res.redirect("/character");
      res.json(data);
      
    });
  });

  app.get("/api/team", function (req, res) {
    db.characters.findAll({}).then(function (players) {
     res.json(players);
   });
 });


  app.post("/api/character", function (req, res) {
    db.characters.create({
      name: req.characterName,
      class_race: req.characterClass,
      age: req.characterAge,
      height: req.characterHeight,
      strength: req.characterStrength,
      weakness: req.characterWeakness,
      description: req.characterDescription,
    }).then(function(team) {
      res.json(team);
      // res.redirect("/squad");
    });
  });
  
};

