'use strict';

var express = require('express');
var router = express.Router();
var Amount = require('../public/javascripts/amount.js');


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.post('/', function (req, res) {
  var amount = new Amount(req.body.amount);
  if (amount.checkAmount() != false){
    res.render('result', {amount: amount, input: req.body.amount});
  }
  else if (amount.checkAmount() == false) {
    res.render('result', {amount: null});
  }
});


module.exports = router;
