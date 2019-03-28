var db = require("../models");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/squad", function(req, res) {
      res.render("squad");
  });

  app.get("/boards", function(req, res) {
      res.render("boards");
  });


  app.get("/character", function(req, res) {
      res.render("character");
    });

  app.get("/marvel", function(req, res) {
      res.render("marvel");
    });

  app.get("/whoniverse", function(req, res) {
      res.render("whoniverse");
    });

  app.get("/adventure", function(req, res) {
      res.render("adventure");
  });
  // Render 404 page for any unmatched routes
  app.get("404", function(req, res) {
    res.render("404", {
      msg: "Welcome"
    });
  });
};
