'use strict';

describe('Social Ice sign up page', function() {

	it('Check if the user entered a valid birthdate (they are 13 years old) and the message does not appear', function() {
		browser.get('http://localhost:8000');

		var text = element(by.model('birthdate'))
		text.sendKeys("11/16/2000")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(false)

	})

	it('Check if the user did not enter a valid birthdate (the user is not 13 years old) and the appropriate message appears', function() {
		browser.get('http://localhost:8000');

		var text = element(by.model('birthdate'))
		text.sendKeys("11/16/2004")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(true)		
	})

	it('Check if the user entered an invalid birthdate (a letter) and the appropriate message appears', function() {
		browser.get('http://localhost:8000');

		var text = element(by.model('birthdate'))
		text.sendKeys("a")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(true)		
	})

    it('should test that the user has entered text into both fields', function(){

      browser.get('http://localhost:8000');

      var element1 = element(by.model('password'));
      var element2 = element(by.model('passwordConfirm'));
      
      element1.sendKeys('a');
      element2.sendKeys('a');

      expect( element1.getText() != null && element2.getText() != null ).toEqual(true);

    });

    it('should test that the user has NOT entered text into both fields', function(){

      browser.get('http://localhost:8000');

      var element1 = element(by.model('password'));
      var element2 = element(by.model('passwordConfirm'));

      expect( element1.getText() && element2.getText() ).toEqual('');

    });

    it('should test that the password and the confirmation that the user entered match', function(){

      browser.get('http://localhost:8000');

      var element1 = element(by.model('password'));
      var element2 = element(by.model('passwordConfirm'));

      element1.sendKeys('a');
      element2.sendKeys('a');

      expect( element1.getText() ).toEqual( element2.getText() );

    });

    it('should test that error message appears when the password and the confirmation do not match', function(){

      browser.get('http://localhost:8000');

      var element1 = element(by.model('password')).sendKeys('a');
      var element2 = element(by.model('passwordConfirm')).sendKeys('b');

      expect( element(by.id('passwordError')).isDisplayed() ).toEqual(true);

    });

})
