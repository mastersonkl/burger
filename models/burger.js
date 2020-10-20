var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  firstInsert: function (cols, vals, cb) {
    orm.firstInsert("burgers",cols, vals, function (res) {
        cb(res);
    });
  },

  firstUpdate: function (objColVals, condition, cb) {
    orm.firstUpdate("burgers",objColVals, condition, function (res) {
        cb(res);
    });
  },

  deleteAll: function (cb) {
    orm.deleteAll("burgers", function (res) {
        cb(res);
    });
  },
};

module.exports = burger;