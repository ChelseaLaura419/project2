var db = require("../models");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.combat.findAll({}).then(function(data) {
      res.render("index", {
        data
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/squad", function(req, res) {
      res.render("squad", {
        msg: "Welcome"
      });
  });

  app.get("/boards", function(req, res) {
      res.render("boards", {
        msg: "Welcome"
      });
  });
=======
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
>>>>>>> b4371cbce27bd0dceb48511d266bbf01bc92077c

  app.get("/character", function(req, res) {
      res.render("character", {
        msg: "Welcome"
      });
    });

  app.get("/marvel", function(req, res) {
      res.render("marvel", {
        msg: "Welcome"
      });
    });

  app.get("/whoniverse", function(req, res) {
      res.render("whoniverse", {
        msg: "Welcome"
      });
    });

  app.get("/adventure", function(req, res) {
      res.render("adventure", {
        msg: "Welcome"
      });
  });
  // Render 404 page for any unmatched routes
<<<<<<< HEAD
  app.get("404", function(req, res) {
    res.render("404", {
      msg: "Welcome"
    });
  });
};
=======

>>>>>>> b4371cbce27bd0dceb48511d266bbf01bc92077c
