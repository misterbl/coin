'use strict';

var Amount = function(amount) {
  this.amount = String(amount);
  this.twoPounds = 0;
  this.onePound = 0;
  this.fiftyP = 0;
  this.twentyP = 0;
  this.tenP = 0;
  this.fiveP = 0;
  this.twoP = 0;
  this.oneP = 0;
};

Amount.prototype.checkAmount = function () {
  var length = (this.amount).length
  if ((this.amount[0] == '£') || (this.amount[length - 1] == ('p' || 'P')) ||
  ((this.amount).match(/^[0-9.]+$/igm))) {
    this.convert();
  }
  else {
    alert ("This is not a valid input")
  };
};

Amount.prototype.convert = function () {
  if ((this.amount).match(/^[.]+$/igm) ||
  ((this.amount)[(this.amount).length - 1] != ('p' || 'P') &&
  (this.amount[0] == '£')) || (this.amount[0] == '£')) {
    this.amount = (parseFloat((this.amount).replace(/£|p|P/g,''))) * 100
  }
  else {
    this.amount = (parseFloat((this.amount).replace(/£|p|P/g,'')));
  };
  this.setTwoPounds();
};

Amount.prototype.setTwoPounds = function () {
  this.twoPounds = Math.floor(this.amount / 200);
  this.setOnePound((this.amount - this.twoPounds * 200));
};

Amount.prototype.setOnePound = function (amount) {
  this.onePound = Math.floor(amount / 100);
  this.setFiftyP((amount - this.onePound * 100));
};

Amount.prototype.setFiftyP = function (amount) {
  this.fiftyP = Math.floor(amount / 50);
  this.setTwentyP((amount - this.fiftyP * 50));
};

Amount.prototype.setTwentyP = function (amount) {
  this.twentyP = Math.floor(amount / 20);
  this.setTenP((amount - this.twentyP * 20));
};

Amount.prototype.setTenP = function (amount) {
  this.tenP = Math.floor(amount / 10);
  this.setFiveP((amount - this.tenP * 10));
};

Amount.prototype.setFiveP = function (amount) {
  this.fiveP = Math.floor(amount / 5);
  this.setTwoP((amount - this.fiveP * 5));
};

Amount.prototype.setTwoP = function (amount) {
  this.twoP = Math.floor(amount / 2);
  this.setOneP((amount - this.twoP * 2));
};

Amount.prototype.setOneP = function (amount) {
  this.oneP = Math.floor(amount / 1);
};

module.exports = Amount;
