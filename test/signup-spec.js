'use strict';

describe('To-watch list search page', function(){

    // //this is a test
    // it('should have the right title', function(){
    //     browser.get('http://localhost:8000');

    //     //browser.getTitle(); //do nothing with yet

    //     expect( browser.getTitle() ).toEqual('Watch List');

    //     browser.getTitle().then(function(response){
    //         console.log(response);
    //     });

    // });

    // //another test!
    // it('it should open a modal search window', function(){
    //   browser.get('http://localhost:8000/#/watchlist');

    //   var searchBar = element(by.model('searchQuery'));
    //   searchBar.sendKeys('shawshank');

    //   browser.pause();

    //   var button = element(by.id('searchButton'));
    //   button.click();

    //   var modalBody = element(by.css('.modal-body'));
    //   expect( modalBody.isPresent() ).toEqual(true);



    // });

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

    it('should test that the password and the confirmation do not match', function(){

      browser.get('http://localhost:8000');

      var element1 = element(by.model('password'));
      var element2 = element(by.model('passwordConfirm'));

      element1.sendKeys('a');
      element2.sendKeys('b');

      expect( element1.getText() !== element2.getText() ).toEqual(true);

    });

})
