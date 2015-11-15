'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

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