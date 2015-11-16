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

})
