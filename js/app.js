'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		var d = Date.parse($scope.birthdate);
		console.log(d)

<<<<<<< HEAD
}]);

=======
>>>>>>> 33748cb13068d35a2bd95efef5a5db07a5eb03f1
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


