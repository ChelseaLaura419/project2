var db = require("../models");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.combat.findAll({}).then(function(dbExamples) {
      res.render("index");
    });
  });

  // Load example page and pass in an example by id
  app.get("/squad", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("squad");
    });
  });

  app.get("/boards", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("boards");
    });
  });

  app.get("/character", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("character");
    });
  });

  app.get("/marvel", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("marvel");
    });
  });

  app.get("/whoniverse", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("whoniverse");
    });
  });

  app.get("/adventure", function(req, res) {
    db.combat.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("adventure");
    });
  });
  // Render 404 page for any unmatched routes
  app.get("404", function(req, res) {
    res.render("404");
  });
};
//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

  // Render 404 page for any unmatched routes

