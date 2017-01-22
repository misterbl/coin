var Amount = require('../public/javascripts/amount.js');



describe ('Amount', function () {
  var change;

  beforeEach(function () {
    change = new Amount("2345");
  });

  it ('has an amount', function () {
    expect(change.amount).toBe("2345");
  });

  it ('has a number of £2 coins', function () {
    change.checkAmount();
    expect(change.twoPounds).toEqual(11);
  });
  it ('has a number of £1 coins', function () {
    change.checkAmount();
    expect(change.onePound).toEqual(1);
  });
  it ('has a number of 50p coins', function () {
    change.checkAmount();
    expect(change.fiftyP).toEqual(0);
  });
  it ('has a number of 20p coins', function () {
    change.checkAmount();
    expect(change.twentyP).toEqual(2);
  });
  it ('has a number of 10p coins', function () {
    change.checkAmount();
    expect(change.tenP).toEqual(0);
  });
  it ('has a number of 5p coins', function () {
    change.checkAmount();
    expect(change.fiveP).toEqual(1);
  });
  it ('has a number of 2p coins', function () {
    change.checkAmount();
    expect(change.twoP).toEqual(0);
  });
  it ('has a number of 1p coins', function () {
    change.checkAmount();
    expect(change.oneP).toEqual(0);
  });
  it ('recognise an input in pounds instead of pennies', function () {
    change.amount = "2.10"
    change.checkAmount();
    expect(change.twoPounds).toEqual(1);
    expect(change.tenP).toEqual(1);
  });
  it ("recognises empty input", function (){
    change.amount = ""
    expect(change.checkAmount()).toEqual(false);
  });
  it ("recognises invalid character", function (){
    change.amount = "13x"
    expect(change.checkAmount()).toEqual(false);
  });
  it ("recognises valid character in the wrong position", function (){
    change.amount = "13p.02"
    expect(change.checkAmount()).toEqual(false);
  });
  it ("recognises missing value)", function (){
    change.amount = "£p"
    expect(change.checkAmount()).toEqual(false);
  });

});
