var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
      var burgerObject = {
        burgers: data,
      };
      res.render("index", burgerObject);
    });
  });
  
  router.post("/api/burgers", function (req, res) {
    burger.firstInsert(["burger_name"], [req.body.burger_name], function (result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.firstUpdate(
      {
        devoured: req.body.devoured,
      },
      condition,
      function (result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
  
  router.delete("/api/burgers/all", function (req, res) {
    burger.deleteAll(function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;