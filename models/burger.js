var orm = require("../config/orm");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  firstInsert: function (name, cb) {
    orm.firstInsert("burgers", name, cb);
  },
  firstUpdate: function (id, cb) {
    orm.firstUpdate("burgers", id, cb);
  },
  firstDelete: function (id, db) {
    orm.firstDelete("burgers", id, cb);
  },
};

module.exports = burgers;