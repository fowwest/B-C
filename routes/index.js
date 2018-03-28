var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about-us page. */
router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'Express' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/single-blog', function(req, res, next) {
  res.render('single-blog', { title: 'Express' });
});

router.get('/elements', function(req, res, next) {
  res.render('elements', { title: 'Express' });
});

module.exports = router;
