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
		.when('/CABHomeDeveloper', {
			controller: 'CABHomeDeveloperController',
			templateUrl: 'partials/cabHomeDeveloper.view.html',
			controllerAs: 'vmd'
		})
		.when('/Development', {
			controller: 'DevelopmentController',
			templateUrl: 'partials/development.view.html',
			controllerAs: 'vmd'
		})
		.when('/CABReturned', {
			controller: 'CABReturnedController',
			templateUrl: 'partials/cabReturned.view.html',
			controllerAs: 'vmd'
		})		
		.when('/ActiveCABs', {
			controller: 'ActiveCABsController',
			templateUrl: 'partials/activeCABs.view.html',
			controllerAs: 'vmd'
		})
		.when('/ChooseForTask', {			
			controller: 'ChooseForTaskController',
			templateUrl: 'partials/chooseForTask.view.html',
			controllerAs: 'vmd'
		})
		.when('/Tasking', {
			controller: 'TaskingController',
			templateUrl: 'partials/tasking.view.html',
			controllerAs: 'vmd'
		})
		.when('/TaskingAdditional', {
			controller: 'TaskingAdditionalController',
			templateUrl: 'partials/taskingAdditional.view.html',
			controllerAs: 'vmd'
		})
		.when('/CloseCAB', {
			controller: 'CloseCABController',
			templateUrl: 'partials/closeCAB.view.html',
			controllerAs: 'vmd'
		})
		.when('/Vote', {
			controller: 'VoteController',
			templateUrl: 'partials/vote.view.html',
			controllerAs: 'vmd'
		})
		.when('/Analyze', {
			controller: 'AnalyzeController',
			templateUrl: 'partials/analyze.view.html',
			controllerAs: 'vmd'
		})
		.when('/UAFSigned', {
			controller: 'UAFSignedController',
			templateUrl: 'partials/uafSigned.view.html',
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