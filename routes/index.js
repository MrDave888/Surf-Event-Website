var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Surf.' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Surf. Events' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Surf. Contact Us' });
});

module.exports = router;
