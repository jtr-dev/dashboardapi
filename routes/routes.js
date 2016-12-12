var Pageres = require('pageres');
var fs = require('fs');
var appRouter = function (app) {




    app.get("/restaurants", function (req, res) {
        var restaurants = [];
        var file = '/storage/restaurants.json'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
            restaurants.push(obj);
        })
        res.send(restaurants);
    });

    app.get("/reviews", function (req, res) {
        var reviews = [];
        var file = '/storage/reviews.json'
        jsonfile.readFile(file, function (err, obj) {
            console.dir(obj);
            console.log(obj);
            reviews.push(obj);
        })
        res.send(reviews);
    });

}


module.exports = appRouter;
