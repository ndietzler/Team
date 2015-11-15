'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		$scope.date = function() {
			var d = Date.parse($scope.birthdate);
			if (isNaN(d)) {
				var newD = Date(d)
				console.log(newD)
			}
			//console.log(d)
		}

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


