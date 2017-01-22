var Money = require('../public/javascripts/money.js');

describe ('Money', function () {
  var money;

  describe ("Valid input", function (){
    beforeEach(function () {
      money = new Money("2389");
      money.checkAmount();
    });

    it ('has an amount converted to integer', function () {
      expect(money.amount).toBe(2389);
    });

    it ('has a number of £2 coins', function () {
      expect(money.twoPounds).toEqual(11);
    });
    it ('has a number of £1 coins', function () {
      expect(money.onePound).toEqual(1);
    });
    it ('has a number of 50p coins', function () {
      expect(money.fiftyP).toEqual(1);
    });
    it ('has a number of 20p coins', function () {
      expect(money.twentyP).toEqual(1);
    });
    it ('has a number of 10p coins', function () {
      expect(money.tenP).toEqual(1);
    });
    it ('has a number of 5p coins', function () {
      expect(money.fiveP).toEqual(1);
    });
    it ('has a number of 2p coins', function () {
      expect(money.twoP).toEqual(2);
    });
    it ('has a number of 1p coins', function () {
      expect(money.oneP).toEqual(0);
    });
  });


  it ('recognise an input in pounds instead of pennies', function () {
    money.amount = "2.10"
    money.checkAmount();
    expect(money.twoPounds).toEqual(1);
    expect(money.tenP).toEqual(1);
  });

  describe ("Invalid input", function (){
    it ("recognises empty input", function (){
      money.amount = ""
      expect(money.checkAmount()).toEqual(false);
    });
    it ("recognises invalid character", function (){
      money.amount = "13x"
      expect(money.checkAmount()).toEqual(false);
    });
    it ("recognises valid character in the wrong position", function (){
      money.amount = "13p.02"
      expect(money.checkAmount()).toEqual(false);
    });
    it ("recognises missing value)", function (){
      money.amount = "£p"
      expect(money.checkAmount()).toEqual(false);
    });
  });
});
