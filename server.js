
var express = require("express");
var jsonfile = require('jsonfile');
var csv = require('csvtojson');
var app = express();

     csv().fromFile('./storage/issues.txt')
        .on('json', (jsonObj) => {
             issues.push(jsonObj)
        })
        .on('done', (error) => {
            console.log(error)
        })

var issues = [];
var newIssues = [{
    repo: 'Career Builder',
    issue: 'Can\'t login',
    comment: ' Attack dog, run away and pretend to be victim with tail in the air',
}, {
    repo: 'Grocery App',
    issue: 'Cafe c\'est non noir',
    comment: 'J\'aime le cafè noir, avec la creme et du sugar. Mais, c\'est non noir a plus. ',
}, {
    repo: 'Grocery App ',
    issue: 'Ou le pommes ',
    comment: 'Je ne peux pas trouver les pommes, J\'ai regardé partout ',
}, {
    repo: 'Leo interdum lectus elementum',
    issue: 'Lorem ipsum dolor sit amet.',
    comment: '  Ignore the squirrels, you\'ll never catch them ',
}, {
    repo: 'Eu recusandae ',
    issue: 'Lorem ipsum dolor sit amet.',
    comment: ' Element convallis risus mauris nam magna wisi, hendrerit dui mauris tincidunt integer in a.',
}, {
    repo: 'Nec porta ',
    issue: 'Lorem ipsum dolor sit amet.',
    comment: 'A claw then lick paws clean wash down prawns with a lap of carnation milk then retire to ',
}, {
    repo: 'lacus quam nunc eget',
    issue: 'Lorem ipsum dolor sit amet.',
    comment: 'Lay on arms while you\'re using the keyboard eat prawns daintily',
}];


app.get("/issues", function (req, res) {
    console.log(issues)
    updateIssues()
    res.send(issues);
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

function updateIssues() {
    setInterval(() => {
        issues.push(newIssues[Math.floor(Math.random() * newIssues.length)]);
    }, 17000);
    setInterval(() => {
        issues.splice(Math.floor(Math.random() * issues.length), 1);
    }, 18000);
}

var server = app.listen(process.env.port || 3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
