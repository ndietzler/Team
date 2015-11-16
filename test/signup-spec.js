'use strict';

describe('Social Ice sign up page', function() {
	
	it('should display error message if user touches and leaves last name empty', function() {
		browser.get('http://localhost:8000');

		var lastNameForm = element(by.model('information.lastName'));
		var invalidName = element(by.id("invalidName"));
		var emailSection = element(by.model('information.email'));
		lastNameForm.click();
		emailSection.click();
		expect(invalidName.isDisplayed()).toEqual(true);

	})

	it('should not display error given valid last name', function(){

		browser.get('http://localhost:8000');

		var lastNameForm = element(by.model('information.lastName'));
		var invalidName = element(by.id("invalidName"));
		lastNameForm.sendKeys('ggame');
		expect(invalidName.isDisplayed()).toEqual(false);

	})

	it('should display error needing an email when clicked and then clicked somewhere else', function(){

		browser.get('http://localhost:8000');

		var emailSection = element(by.model('information.email'));
		var needEmailMessage = element(by.id('needEmail'));
		emailSection.click();
		var firstName = element(by.model('information.firstName'));
		firstName.click();
		expect(needEmailMessage.isDisplayed()).toEqual(true);

	})

	it('should display invalid error when invalid email is given', function(){

		browser.get('http://localhost:8000');

		var emailSection = element(by.model('information.email'));
		var invalidEmailMessage = element(by.id('notValid'));
		emailSection.sendKeys("myName");
		var firstName = element(by.model('information.firstName'));
		firstName.click();
		expect(invalidEmailMessage.isDisplayed()).toEqual(true);

	})

	it('should not display an error message when valid email is entered', function(){

		browser.get('http://localhost:8000');

		var emailSection = element(by.model('information.email'));
		var needEmailMessage = element(by.id('needEmail'));
		var invalidEmailMessage = element(by.id('notValid'));
		emailSection.sendKeys("example@example.com");
		var firstName = element(by.model('information.firstName'));
		firstName.click();
		expect(needEmailMessage.isDisplayed()).toEqual(false);
		expect(invalidEmailMessage.isDisplayed()).toEqual(false);

	})

	it('Check if the user entered a valid birthdate (they are 13 years old) and the message does not appear', function() {

		browser.get('http://localhost:8000');

		var text = element(by.model('information.birthdate'))
		text.sendKeys("11/16/2000")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(false)

	})

	it('Check if the user did not enter a valid birthdate (the user is not 13 years old) and the appropriate message appears', function() {

		browser.get('http://localhost:8000');

		var text = element(by.model('information.birthdate'))
		text.sendKeys("11/16/2004")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(true)

	})

	it('Check if the user entered an invalid birthdate (a letter) and the appropriate message appears', function() {

		browser.get('http://localhost:8000');

		var text = element(by.model('information.birthdate'))
		text.sendKeys("a")

		expect( element(by.id('birthDate')).isDisplayed()).toEqual(true)

	})

  it('should test that the user has entered text into both fields', function(){

    browser.get('http://localhost:8000');

    var element1 = element(by.model('information.password'));
    var element2 = element(by.model('information.passwordConfirm'));
    
    element1.sendKeys('a');
    element2.sendKeys('a');

    expect( element1.getText() != null && element2.getText() != null ).toEqual(true);

  });

  it('should test that the user has NOT entered text into both password fields', function(){

    browser.get('http://localhost:8000');

    var element1 = element(by.model('information.password'));
    var element2 = element(by.model('information.passwordConfirm'));

    expect( element1.getText() && element2.getText() ).toEqual('');

  });

  it('should test that the password and the confirmation that the user entered match', function(){

    browser.get('http://localhost:8000');

    var element1 = element(by.model('information.password'));
    var element2 = element(by.model('information.passwordConfirm'));

    element1.sendKeys('a');
    element2.sendKeys('a');

    expect( element1.getText() ).toEqual( element2.getText() );

  });

  it('should test that error message appears when the password and the confirmation do not match', function(){

    browser.get('http://localhost:8000');

    var element1 = element(by.model('information.password')).sendKeys('a');
    var element2 = element(by.model('information.passwordConfirm')).sendKeys('b');

    expect( element(by.id('passwordError')).isDisplayed() ).toEqual(true);

  });

  it('should test the popup is NOT displayed when the submit button is clicked and the form has not been filled out', function(){

    browser.get('http://localhost:8000');

    var popup = element(by.id('popup'));
    element(by.id('submit')).click();

    expect( popup.isDisplayed() ).toEqual(false);

  });

  it('should test the popup displays once the signup button has been clicked', function(){

    browser.get('http://localhost:8000');

    var popup = element(by.id('popup'));

    element(by.model('information.email')).sendKeys('n@u');
    element(by.model('information.lastName')).sendKeys('hi');
    element(by.model('information.birthdate')).sendKeys("11/16/2004");
    element(by.model('information.password')).sendKeys('a');
    element(by.model('information.passwordConfirm')).sendKeys('b');

    element(by.id('submit')).click();

    expect( popup.isDisplayed() ).toEqual(true);

  });

  it('should test the submit button is disabled when the form is invalid', function(){

    browser.get('http://localhost:8000');

    expect( element(by.id('submit')).isEnabled() ).toEqual(false);

  });

  it('should test the all fields are empty once the reset button has been pushed', function(){

    browser.get('http://localhost:8000');

    element(by.id('reset')).click();

    var password1 = element(by.model('information.password'));
    var password2 = element(by.model('information.passwordConfirm'));
    var lastname = element(by.model('information.lastName'));
    var email = element(by.model('information.email'));
    var birthdate = element(by.model('information.birthdate'));

    expect( password1.getText() && password2.getText() && lastname.getText() && email.getText() && birthdate.getText() ).toEqual('');

  });


})
