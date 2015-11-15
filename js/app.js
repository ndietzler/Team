'use strict';

angular.module('SocialIce', [])
	.controller('signupCtrl', ['$scope', function($scope) {

<<<<<<< HEAD
		var d = Date.parse($scope.birthdate);
		console.log(d)
		
=======
		$scope.date = function() {
			var d = Date.parse($scope.birthdate);
			if (isNaN(d)) {
				var newD = Date(d)
				console.log(newD)
			}
			//console.log(d)
		}

>>>>>>> 1b2de259d5dfac76b73faa2935d3cf06114d60f3
		$scope.checkMatch = function() {
			if ($scope.password != null && $scope.passwordConfirm != null && $scope.password === $scope.passwordConfirm) {
				return true;
			} else {
				return false;
			}
		}

}]);


