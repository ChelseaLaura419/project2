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
      res.json(data);
    });
  });
};
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
//   });
