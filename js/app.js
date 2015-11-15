'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		var d = Date.parse($scope.birthdate);
		console.log(d)

		$scope.checkMatch = function() {
			if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

}]);


