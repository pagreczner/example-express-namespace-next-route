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

b = function(req, res, next) {
  next('route');
};

c = function(req, res, next) {
  console.log('will not print');
  res.send(500);
};

app.namespace('/me', function() {
  app.get('/:id', b, c);
});

http.createServer(app).listen(3000);
