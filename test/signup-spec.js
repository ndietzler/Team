'use strict';

describe('Social Ice sign up page', function() {
	it('should display error needing an email when clicked and then clicked somewhere else', function(){
		browser.get('http://localhost:8000');

		var emailSection = element(by.model('email'));
		var needEmailMessage = element(by.id('needEmail'));
		emailSection.click();
		var firstName = element(by.model('firstName'));
		firstName.click();
		expect(needEmailMessage.isDisplayed()).toEqual(true);
	})

	it('should display invalid error when invalid email is given', function(){
		browser.get('http://localhost:8000');

		var emailSection = element(by.model('email'));
		var invalidEmailMessage = element(by.id('notValid'));
		emailSection.sendKeys("myName");
		var firstName = element(by.model('firstName'));
		firstName.click();
		expect(invalidEmailMessage.isDisplayed()).toEqual(true);
	})

	it('should not display an error message when valid email is entered', function(){
		browser.get('http://localhost:8000');

		var emailSection = element(by.model('email'));
		var needEmailMessage = element(by.id('needEmail'));
		var invalidEmailMessage = element(by.id('notValid'));
		emailSection.sendKeys("example@example.com");
		var firstName = element(by.model('firstName'));
		browser.pause();
		firstName.click();
		expect(needEmailMessage.isDisplayed()).toEqual(false);
		expect(invalidEmailMessage.isDisplayed()).toEqual(false);
	})

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
