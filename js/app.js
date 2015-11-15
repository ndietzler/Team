'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		$scope.date = function() {
			var d = Date.parse($scope.birthdate);
			if (!isNaN(d)) {
				var newD = Date(d)
				console.log(newD)
			}
			//console.log(d)
		}

		$scope.checkMatch = function() {
			if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

}]);


