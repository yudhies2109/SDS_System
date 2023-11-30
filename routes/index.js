var express = require('express');
var router = express.Router();

module.exports = function (db) {
  router.get('/', function (req, res, next) {
    res.render('home/view', {
      current: 'home'
    });
  });

  router.get('/about', function (req, res, next) {
    res.render('about/view', {
      current: 'about'
    });
  });

  router.get('/services', function (req, res, next) {
    res.render('services/view', {
      current: 'services'
    });
  });

  router.get('/career', function (req, res, next) {
    res.render('career/view', {
      current: 'career'
    });
  });

  router.get('/contact', function (req, res, next) {
    res.render('contact/view', {
      current: 'contact'
    });
  });

  router.get('/login', function (req, res, next) {
    res.render('login/view', { title: 'Express' });
  });


  return router;
}
