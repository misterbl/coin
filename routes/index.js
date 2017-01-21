'use strict';

var express = require('express');
var router = express.Router();
var Amount = require('../public/javascripts/amount.js');
var session = require('express-session');
var sess;

/* GET home page. */
router.get('/', function (req, res) {
    console.log("hello");
  res.render('index');
});

router.post('/', function (req, res) {
  var amount = new Amount(req.body.amount);
  amount.checkAmount();
  res.render('result', {amount: amount});
});


module.exports = router;
