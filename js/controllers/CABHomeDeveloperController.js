'use strict';

    angular
        .module('app')
        .controller('CABHomeDeveloperController', CABHomeDeveloperController);

    CABHomeDeveloperController.$inject = ['$location', '$scope', 'CabData'];
    function CABHomeDeveloperController($location, $scope, CabData) {
        var vmd = this;
		
		CabData.getAllCABAPI(function(cabs){
          $scope.allCabs = cabs;
        });

        $scope.filterCABShow = 13;

        vmd.selected = [];
        $scope.openCharacterDetails = function () {
            vmd.selected = this.session;
            console.log('cabDetails.html/id=' + vmd.selected);
           // CabData.getDataForCABTest(); 
            window.location = '#/cabDetails';
            console.log(vmd.selected);
        }

    }