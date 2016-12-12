
var express = require("express");
var jsonfile = require('jsonfile');
var app = express();



  app.get("/restaurants", function (req, res) {
        var restaurants = [];
        var file = './storage/restaurants.json'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
            restaurants.push(obj);
        res.send(obj);
        })
    });

    app.get("/reviews", function (req, res) {
        var reviews = [];
        var file = './storage/reviews.json'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
            // reviews.push(obj);
        res.send(obj);
        })
    });
// var routes = require("./routes/routes.js")(app);

var server = app.listen(process.env.port || 3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
