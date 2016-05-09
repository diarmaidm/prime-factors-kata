var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prime Factors Kata' });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: 'Prime Factors Kata', factors: '5, 5' });
});

module.exports = router;
