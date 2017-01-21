var Amount = require('../public/javascripts/amount.js');
var amount= require('SpecHelper')


describe ('Amount', function () {
  var user;

  it ('has a username', function () {
    user = models.User.create({
        username: 'Blanca',
        email: 'blanca@makers.com',
        firstname: 'Blanca',
        lastname: 'Spanish',
        password: 'password2016'
    });
    expect(user._boundTo.dataValues.username).toBe("Blanca");
});

  });
