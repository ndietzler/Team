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
			if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

}]);


