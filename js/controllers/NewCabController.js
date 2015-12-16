'use strict';

    angular
        .module('app')
        .controller('NewCabController', HomeController);

    NewCabController.$inject = ['$scope'];
    function NewCabController($scope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];

        initController();

        function initController() {
           //loadNesto....
           //loadCurrentUser()
        }

        //function loadCurrentUser() {          
        //}

    }