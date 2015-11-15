'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		$scope.date = function() {
			var d = Date.parse($scope.birthdate);
			if (!isNaN(d)) {
				var newD = new Date(d)
				if (Date.now() - d >= 410240038000 ) {
					return true;
				} else {
					return false;
				}
			}
		}

		$scope.checkMatch = function() {
			if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

		$scope.reset = function() {
			$scope.email = "";
			$scope.firstName = "";
			$scope.lastName = "";
			$scope.birthdate = "";
			$scope.password = "";
			$scope.passwordConfirm = "";
		}

}]);


