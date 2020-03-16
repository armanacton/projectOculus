var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
var context = {
  newTickets:4,
  pendingTickets:3,
  closedTickets:5
};
//var path = require('path');

app.get('/', function(req, res) {
	res.render('index.handlebars', context);
});

app.get('/weekly', function(req, res) {
	res.render('weekly.handlebars');
});

app.get('/daily', function(req, res) {
	res.render('daily.handlebars');
});

app.use(function(req, res) {
	res.render('404.handlebars');
});

// 500 - Any server error
app.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(8080);
console.log("Now running on http://localhost:8080")