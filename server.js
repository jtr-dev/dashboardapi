
var express = require("express");
var jsonfile = require('jsonfile');
var app = express();



  app.get("/issues", function (req, res) {
        var file = './storage/issues.txt'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
        res.send(obj);
        })
    });

    app.get("/revenue", function (req, res) {
        var file = './storage/revenue.json'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
        res.send(obj);
        })
    });
// var routes = require("./routes/routes.js")(app);

var server = app.listen(process.env.port || 3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
