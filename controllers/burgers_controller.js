var express = require("express");
var router = express.Router();
var burgers = require("../models/burger");

router.get("/", function (req, res) {
  burgers.all(function (result) {
    const allBurgers = {
      burgers: result,
    };
    res.render("index", allBurgers);
  });
});

router.post();

router.put();

router.delete();

module.exports = router;