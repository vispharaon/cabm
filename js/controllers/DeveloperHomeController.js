'use strict';

    angular
        .module('app')
        .controller('DeveloperHomeController', DeveloperHomeController);

    DeveloperHomeController.$inject = ['UserService', '$rootScope', '$scope', 'CabData'];
    function DeveloperHomeController(UserService, $rootScope, $scope, CabData) {
        var vmd = this;

        $scope.isDeveloper = true;
        $scope.isTasker = true;
        $scope.isAnalyzer = true;
        $scope.isTester = true;
    }