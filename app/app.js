angular.module('app',[]);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('index', {
		url: '/',
		templateUrl: 'app/views/number-range.html',
	});

	/* Add New States Above */

	$urlRouterProvider.otherwise('/');
	// $locationProvider.html5Mode(true);
});

