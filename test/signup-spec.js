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
describe('User Name input', function(){
	var input = element(by.model('lastName'));

	beforeEach(){
		browser.get('http://localhost:8000');
	});

	it('should alert user if the form contains an invalid last name', function() {
		input.sendKeys('pantalones');
		input.clear();
		expect(socialForm.lastName.$touched.toEqual(true);
		expect(socialForm.lastName.$error.required.toEqual(true);
	});

	it('should consider all input as valid', function(){
		input.sendKeys('cardwars');
		expect(socialForm.lastName.$error.required.toEqual(false));
	}
})
