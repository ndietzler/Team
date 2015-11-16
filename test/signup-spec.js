'use strict';

describe('Social Ice sign up page', function() {

	// it('Check if the user entered text into birthdate function', function() {
	// 	browser.get('http://localhost:8000');

	// 	var text = element(by.model('birthdate'))
	// 	text.sendKeys("1")

	// 	expect(text != null).toEqual(true)

	// })

	// it('Check if birthdate entered is valid', function() {
	// 	browser.get('http://localhost:8000');

		
	// })

//     //this is a test
//     it('should have the right title', function(){
//         browser.get('http://localhost:8000');

//         //browser.getTitle(); //do nothing with yet

//         expect( browser.getTitle() ).toEqual('Watch List');

//         browser.getTitle().then(function(response){
//             console.log(response);
//         });

//     });

//     //another test!
//     it('it should open a modal search window', function(){
//       browser.get('http://localhost:8000/#/watchlist');

//       var searchBar = element(by.model('searchQuery'));
//       searchBar.sendKeys('shawshank');

//       browser.pause();

//       var button = element(by.id('searchButton'));
//       button.click();

//       var modalBody = element(by.css('.modal-body'));
//       expect( modalBody.isPresent() ).toEqual(true);



//     });


// })

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


})
