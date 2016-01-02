'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$scope', 'CabData'];
    function HomeController(UserService, $rootScope, $scope, CabData) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

        $scope.cabImages = {
            imageNewCAB: 'img/document_add.png',
            altNewCAB: 'Dodaj Novi CAB'           
        }

       CabData.getAllCABAPI(function(cabs){
          $scope.allCabs = cabs;
        });

        $scope.filterCABShow = 13;

        vm.selected = [];
        $scope.openCharacterDetails = function () {
            vm.selected = this.session;
            console.log('cabDetails.html/id=' + vm.selected);
           // CabData.getDataForCABTest(); 
            window.location = '#/cabDetails';
            console.log(vm.selected);
        }

        $scope.openCabNewPage = function(){
            window.location = '#/cabNew';
        }
    }