'use strict';

    angular
        .module('app')
        .controller('LoginDeveloperController', LoginDeveloperController);

    LoginDeveloperController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginDeveloperController($location, AuthenticationService, FlashService) {
        var vmd = this;

        vmd.loginDevelopers = loginDevelopers;

        //vm.navShow = false;
        (function initController() {
            // reset login status
            console.log('after credentials are clearing...');
            AuthenticationService.ClearCredentials();
            console.log('after credentials are cleared');
        })();

        function loginDevelopers() {
            console.log('..Amar');
            vmd.dataLoading = true;        
            vmd.password = '-';
            console.log(vmd.username);
            AuthenticationService.LoginDeveloper(vmd.username, function (response, data) {
                //console.log(response);
                if (response == "200") {
                    console.log('..' + vmd.username);
                    AuthenticationService.SetCredentials(data.User_Id, vmd.username, vmd.password, data.isAdmin, data.isExternal);
                    //vm.navShow = true;
                    $location.path('/developerHome');
                } else {
                    FlashService.Error(data.Message);
                    vmd.dataLoading = false;
                }
            });
        };
    }