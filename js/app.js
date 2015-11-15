'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		var d = Date.parse($scope.birthdate);
		console.log(d)

		$scope.checkMatch = function() {
		console.log("hello");
		// if (password == passwordConfirm) {
		// 	console.log("true");
		// 	return true;
		// } else {
		// 	console.log("false");
		// 	return false;
		// }
		}

}]);


