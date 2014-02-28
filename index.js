var app, b, c, express, http;

http = require('http');

express = require('express');

require('express-namespace');

app = express();

app.configure(function() {
  app.use(app.router);
  app.use(function(req, res, next) {
    res.send(404);
  });
});

a = function(req, res, next) {
  console.log("Here A");
  next()
};

a2 = function(req, res, next) {
  console.log("A22");
  next();
};
b = function(req, res, next) {
  console.log("B");
  next('route');
};

c = function(req, res, next) {
  console.log('will not print');
  res.send(500);
};

app.namespace('/me', a, a2, function() {
  app.get('/:id', b, c);
});

app.namespace('/dog', a, function() {
  app.namespace('/cat', a2, function() {
    app.get('/:id', b, c);
  });
});

http.createServer(app).listen(3860);
console.log("STARTING_____________");
