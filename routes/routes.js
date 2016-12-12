var Pageres = require('pageres');
var fs = require('fs');
var appRouter = function (app) {

    app.get("/restaurants", function (req, res) {
        res.send('/storage/restaurants.json');
    });

    app.get("/reviews", function (req, res) {
        res.send('/storage/reviews.json');
    });

}


module.exports = appRouter;
