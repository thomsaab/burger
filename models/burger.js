var orm = require("../config/orm.js");



var burgers = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        });

    },
    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res)
        });
    },
    update: function(condition, cb) {
        orm.updateOne("burgers", "devoured = true", condition, function(res){
            cb(res)
        })
    },
    delete: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res)
        })
    }
 }

 module.exports = burgers;
