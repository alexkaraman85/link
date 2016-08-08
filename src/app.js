var pjson = require('../package.json');
var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: pjson.name});

var config = require('config');
var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs(config.app.templates));
app.set('view engine', '.hbs');
app.set('views', config.app.templates.views);

var pages = require('./pages/pages-server.js');
var possibleVerbs = ['get', 'post'];

var forEach = require('lodash.foreach');
forEach(pages, function registerPage(page) {
  var router = express.Router();
  logger.info({message: 'Created Router', page: page.basepath}, 'SERVER');

  page.actions.forEach(function iteratePathActions(pageAction) {
    possibleVerbs.map(function registerPathActions(possibleVerb){
      var callback = pageAction[possibleVerb];

      if(callback) {
        router[possibleVerb](pageAction.path, callback);

        logger.info({message: 'Router registration',
          page: page.basepath,
          path: pageAction.path}, 'SERVER');
      }
    })
  });

  app.use('/'+page.basepath, router);
  logger.info({message:'Using Router', page: page.basepath}, 'SERVER');
});

app.listen(config.app.port, function startingServer() {
  logger.info({message: 'link web app started ', port: config.app.port}, 'SERVER');
});
