'use strict';

// describe('To-watch list search page', function(){

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

describe('Email', function(){
	it('should throw first error when clicked and then clicked somewhere else', function(){
		browser.get('http://localhost:8000');

		var emailSection = element(by.model('email'));
		emailSection.click();
		var firstName = element(by.model('firstName'));
		firstName.click();
		expect(emailSection, 'ng-invalid').toEqual(true);
		


	})

})
