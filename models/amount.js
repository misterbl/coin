'use strict';

var Amount = function(amount) {
  this.amount = amount;
  this.twoPounds = 0;
  this.onePound = 0;
  this.fiftyP = 0;
  this.twentyP = 0;
  this.tenP = 0;
  this.fiveP = 0;
  this.twoP = 0;
  this.oneP = 0;
}

Amount.prototype.convert = function () {
  this.twoPounds = Math.floor(this.amount / 2);
  this.setOnePound((this.amount - this.twoPounds * 2));
};

Amount.prototype.setOnePound = function (amount) {
  this.onePound = Math.floor(amount);
  this.setFiftyP((amount - this.onePound));
};

Amount.prototype.setFiftyP = function (amount) {
  this.fiftyP = Math.floor(amount / 0.50);
  this.setTwentyP((amount - this.fiftyP * 0.50));
};

Amount.prototype.setTwentyP = function (amount) {
  this.twentyP = Math.floor(amount / 0.20);
  this.setTenP((amount - this.twentyP * 0.20));
};

Amount.prototype.setTenP = function (amount) {
  this.tenP = Math.floor(amount / 0.10);
  this.setFiveP((amount - this.tenP * 0.10));
};

Amount.prototype.setFiveP = function (amount) {
  this.fiveP = Math.floor(amount / 0.05);
  this.setTwoP((amount - this.fiveP * 0.05));
};

Amount.prototype.setTwoP = function (amount) {
  this.twoP = Math.floor(amount / 0.02);
  this.setOneP((amount - this.twoP * 0.02));
};

Amount.prototype.setOneP = function (amount) {
  this.oneP = Math.floor(amount / 0.01);
};

module.exports = Amount;
