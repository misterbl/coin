'use strict';

var Money = function(amount) {
  this.amount = amount;
  this.twoPounds = 0;
  this.onePound = 0;
  this.fiftyP = 0;
  this.twentyP = 0;
  this.tenP = 0;
  this.fiveP = 0;
  this.twoP = 0;
  this.oneP = 0;
};

Money.prototype.checkAmount = function () {
  // checks if the input is valid
  var length = (this.amount).length
  if ((/\d/.test(this.amount)) && ((this.amount[0] == '£') ||
  (this.amount[length - 1] == ('p' || 'P')) ||
  ((this.amount).match(/^[0-9.]+$/igm)))) {
    this.convert();
  }
  else {
    return false;
  };
};

Money.prototype.convert = function () {
  // convert the input to pennies if it is in £
  if ((/\./.test(this.amount)) ||
  ((this.amount)[(this.amount).length - 1] != ('p' || 'P') &&
  (this.amount[0] == '£')) || (this.amount[0] == '£')) {
    this.amount = (parseFloat((this.amount).replace(/£|p|P/g,''))) * 100
  }
  else {
    this.amount = (parseFloat((this.amount).replace(/£|p|P/g,'')));
  };
  this.setTwoPounds(this.amount);
};

Money.prototype.setTwoPounds = function (amount) {
  // if any, calculate the number of £2 coins that makes the input
  this.twoPounds = this.number(amount, 200);
  this.setOnePound((this.amount - this.twoPounds * 200));
};

Money.prototype.setOnePound = function (amount) {
  // if any, calculate the number of £1 coins that makes the input
  this.onePound = this.number(amount, 100);
  this.setFiftyP((amount - this.onePound * 100));
};

Money.prototype.setFiftyP = function (amount) {
  // if any, calculate the number of 50p coins that makes the input
  this.fiftyP = this.number(amount, 50);
  this.setTwentyP((amount - this.fiftyP * 50));
};

Money.prototype.setTwentyP = function (amount) {
  // if any, calculate the number of 20p coins that makes the input
  this.twentyP = this.number(amount, 20);
  this.setTenP((amount - this.twentyP * 20));
};

Money.prototype.setTenP = function (amount) {
  // if any, calculate the number of 10p coins that makes the input
  this.tenP = this.number(amount, 10);
  this.setFiveP((amount - this.tenP * 10));
};

Money.prototype.setFiveP = function (amount) {
  // if any, calculate the number of 5p coins that makes the input
  this.fiveP = this.number(amount, 5);
  this.setTwoP((amount - this.fiveP * 5));
};

Money.prototype.setTwoP = function (amount) {
  // if any, calculate the number of 2p coins that makes the input
  this.twoP = this.number(amount, 2);
  this.setOneP((amount - this.twoP * 2));
};

Money.prototype.setOneP = function (amount) {
  // if any, calculate the number of 1p coins that makes the input
  this.oneP = this.number(amount, 1);
};

Money.prototype.number = function(amount, divider){
  return Math.floor(amount / divider)
};

module.exports = Money;
