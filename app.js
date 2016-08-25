angular.module('HCL', ['ui.router','ngResource','app']);

angular.module('HCL').config(function($stateProvider, $urlRouterProvider) {

});

angular.module('HCL').run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

});
