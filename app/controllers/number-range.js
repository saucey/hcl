angular.module('app').controller('numberRangeCtrl', function($scope, $resource, $timeout) {

	$scope.number = {};
	$scope.numberattepmts = {};
	$scope.attempts = 3;

	var getLocations = $resource('/api/number-range');

	$scope.submit = function(number) {

		$scope.success = {
			prompt: false
		};

		getLocations.save({number: number}, function(res) {
			$scope.success = {
				prompt: res.success,
				message: res.message,
				alertType: 'success'
			};
			$scope.attempts = 3;
			$scope.numberattepmts = {};
		}, function(err) {
			console.log(err);
			$scope.numberattepmts = err.data.user.numberattepmts;
			$scope.success = {
				prompt: err.data.attemptsMax,
				message: err.data.message,
				alertType: 'danger'
			};
			$scope.attemptsMax = err.data.attemptsMax;
			$scope.attempts = err.data.user.attempts;
		});
	};
});
