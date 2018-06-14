var connection = require("./connection.js");



var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM "+ table;
        connection.query(query, function(err, results) {
            if (err) {
                throw err
            }
            cb(results)

        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table+" ("+cols.toString()+") VALUES (?)";


        connection.query(queryString, vals, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
    updateOne: function(table, vals, condition, cb) {
        var query = "Update "+table+" SET "+vals+" WHERE "+condition;
        console.log(query)
        connection.query(query, function(err, results) {
        if (err) throw err;
        cb(results)
        })
    },
    deleteOne: function(table, condition, cb) {
        var query = "DELETE FROM "+ table + " WHERE "+ condition;
        console.log(query)
        connection.query(query, condition, function(err, results) {
            if (err) throw err;
            cb(results)
        })
    }

};


// export the orm object
module.exports = orm;