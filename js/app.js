'use strict';

var app = angular
					.module('app', ['ngRoute', 'ngCookies', 'ngResource'])
					.config(config)
					.run(run);

config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
function config($routeProvider, $locationProvider, $httpProvider){
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'partials/home.view.html',
			controllerAs: 'vm'

		})

		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'partials/login.view.html',
			controllerAs: 'vm'
		})

		.when('/developerLogin', {
			controller: 'LoginDeveloperController',
			templateUrl: 'partials/loginDevelopers.view.html',
			controllerAs: 'vmd'
		})
		

		.when('/register', {
			controller: 'RegisterController',
			templateUrl: 'partials/register.view.html',
			controllerAs: 'vm'
		})

		.when('/cabDetails',{
			controller: 'CabController',
			templateUrl: 'partials/cabDetails.view.html',
			controllerAs: 'vm'
		})
		.when('/cabNew', {
			controller: 'NewCabController',
			templateUrl: 'partials/cabNew.view.html',
			controllerAs: 'vm'
		})
		.when('/developerHome', {
			controller: 'DeveloperHomeController',
			templateUrl: 'partials/developerHome.view.html',
			controllerAs: 'vmd'
		})

		.otherwise({ redirectTo: '/' });
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http){
	//keep user logged in after page refresh
	$rootScope.globals = $cookieStore.get('globals') || {};
	if ($rootScope.globals.currentUser){
		$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
	}

	$rootScope.$on('$locationChangeStart', function (event, next, current){
		// redirect to login page if not logged in and trying to access a restricted page
		var restrictedPage = $.inArray($location.path(), ['/login', '/register', '/developerLogin']) === -1;
		var loggedIn = $rootScope.globals.currentUser;
		console.log('amar-amar');
		if(restrictedPage && !loggedIn){
			if($location.path().indexOf('/developerLogin') > -1)
				$location.path('/developerLogin');
			else					
				$location.path('/login');
		}
	});
}