'use strict';

describe('Social Ice sign up page', function() {

	it('Check if the user entered a valid birthdate and the message does not appear', function() {
		browser.get('http://localhost:8000');

		var text = element(by.model('birthdate'))
		text.sendKeys("1")

		expect(birthDate.isDisplayed()).toEqual(true)

	})

	// it('Check if the user did not enter a valid birthdate and the appropriate message appears', function() {
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

})
