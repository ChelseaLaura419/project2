var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/", function(req, res) {
    db.combat.findAll({}).then(function(dbcombat) {
      res.json(dbcombat);
    });
  });
};

  // Create a new example
  // app.post("/api/combat", function(req, res) {
  //   db.combat.create(req.body).then(function(dbcombat) {
  //     res.json(dbcombat);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
//   });
