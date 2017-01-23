'use strict';

var express = require('express');
var router = express.Router();
var Money = require('../public/javascripts/money.js');


/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.post('/', function (req, res) {
  var money = new Money (req.body.amount);
  if (money.checkAmount() != false){
    res.render('result', {money: money, input: req.body.amount});
  }
  else  {
    res.render('result', {money: null});
  }
});


module.exports = router;
