'use strict';

var express = require('express');
var router = express.Router();
var Amount = require('../models/amount.js');
var session = require('express-session');
var sess;

/* GET home page. */
router.get('/', function (req, res) {
    console.log("hello");
  res.render('index');
});

router.post('/', function (req, res) {
  var amount = new Amount(req.body.amount);
console.log(amount);
  res.render('result');
    console.log("hello2");

});


module.exports = router;
