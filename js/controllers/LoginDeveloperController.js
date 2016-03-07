'use strict';

    angular
        .module('app')
        .controller('LoginDeveloperController', LoginDeveloperController);

    LoginDeveloperController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginDeveloperController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = loginDevelopers;
        //vm.navShow = false;
        (function initController() {
            console.log('login developers reset');
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function loginDevelopers() {
            console.log('..' + vm.username);
            vm.dataLoading = true;        
            vm.password = '-';
            AuthenticationService.LoginDeveloper(vm.username, function (response, data) {
                //console.log(response);
                if (response == "200") {
                    console.log('..' + vm.username);
                    AuthenticationService.SetCredentials(data.User_Id, vm.username, vm.password, data.isAdmin, data.isExternal);
                    //vm.navShow = true;
                    $location.path('/');
                } else {
                    FlashService.Error(data.Message);
                    vm.dataLoading = false;
                }
            });
        };
    }