'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

		$scope.date = function() {
			var d = Date.parse($scope.birthdate);
			if (!isNaN(d)) {
				var newD = new Date(d)
				if (Date.now() - d >= 410240038000 ) {
					console.log("is of age");
					return true;
				} else {
					console.log("is not of age");
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

}]);


