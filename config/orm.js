const connection = require("./connection.js");

function generateQuestion(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?").toString();
    }
    return arr;
  }
  
  function objectToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value).toString();
      }
    }
    return arr;
  }
  
  var orm = {
    selectAll: function (tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  
    insertOne: function (table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += generateQuestion(vals.length);
      queryString += ") ";
  
      connection.query(queryString, vals, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  
    updateOne: function (table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objectToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  
    delete: function (table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  
    deleteAll: function (table, cb) {
      var queryString = "DELETE FROM " + table;
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  };
  
  module.exports = orm;