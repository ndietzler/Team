'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl'), ['$scope', function($scope){

		var d = Date.parse($scope.birthdate);
		console.log(d)

}];