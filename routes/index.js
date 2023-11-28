var express = require('express');
var router = express.Router();

module.exports = function (db) {
  router.get('/', function (req, res, next) {
    res.render('home/view', { title: 'Express' });
  });

  router.get('/about', function (req, res, next) {
    res.render('about/view', { title: 'Express' });
  });


  router.get('/career', function (req, res, next) {
    res.render('career/view', { title: 'Express' });
  });

  router.get('/contact', function (req, res, next) {
    res.render('contact/view', { title: 'Express' });
  });


  return router;
}
