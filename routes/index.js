(function () {'use strict';
/* global require */

var express = require('express');
var router = express.Router();
var Amount = require('../models/amount.js');


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
    console.log("hello");
});

router.post('/', function (req, res) {
console.log("Hello");
  res.redirect('/result');
});

router.get('/result', function(req, res) {
  res.render('result');
});


module.exports = router;
}());
