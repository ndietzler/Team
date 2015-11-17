'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {
		
		$scope.information = {};

		$scope.submitClick = false;

		// Calculates date in miliseconds
		// Determines whether user is age eligible
		$scope.date = function() {
			var d = Date.parse($scope.information.birthdate);
			if (!isNaN(d)) {
				var newD = new Date(d)
				if (Date.now() - d >= 410240038000 ) {
					return true;
				} else {
					return false;
				}
			}
		}

		// Check if the passwords match
		$scope.checkMatch = function() {
			if ($scope.information.password != null && $scope.information.passwordConfirm != null && $scope.information.password === $scope.information.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

		// Resets the form
		$scope.reset = function() {
			$scope.information = {};
			$scope.information.email = "";
			$scope.socialForm.email.$setUntouched();
			$scope.socialForm.lastName.$setUntouched();
		}

}]);


