'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {
		
		$scope.information = {};

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

		$scope.checkMatch = function() {
			if ($scope.information.password != null && $scope.information.passwordConfirm != null && $scope.information.password === $scope.information.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

		$scope.reset = function() {
			$scope.information = {};
			$scope.information.email = "";
			$scope.socialForm.email.$setUntouched();
			$scope.socialForm.lastName.$setUntouched();
		}

}]);


