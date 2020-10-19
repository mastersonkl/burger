const connection = require("./connection");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    firstInsert: function (tableInput, val1, cb) {
        connection.query(
            "INSERT INTO " + tableInput + "(burger_name) VALUES ('" + val1 + "');"
        ),
            function (err, result) {
                if (err) throw err;
            };
        cb(result);
    },

    firstUpdate: function (tableInput, condition, cb) {
        var queryString = "Update ?? SET devoured=true WHERE ?";
        connection.query(queryString, [tableInput, condition], function (
            err,
            result
        ) {
            if (err) throw err;
            cb(result);
        });
    },


    firstDelete: function (tableInput, condition, cb) {
        connection.query(
            "DELETE FROM " + tableInput + " WHERE id= " + condition + ";",
            function (err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },
};


module.exports = orm;