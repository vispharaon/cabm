'use strict';

    angular
        .module('app')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['$scope', 'CabData'];
    function ResourceController($scope, CabData) {
        var vm = this;
        
        if(typeof CabData.selectedHomeCAB !== "undefined")
        {
        	$scope.cab = CabData.selectedHomeCAB;
        	console.log($scope.cab);
        }

        CabData.getDevelopers(function(developersData){
		    $scope.developers = developersData;
		});

        $(function() {
			$( ".datepicker" ).datepicker();
	  	});

	  	$scope.developerClicked = function(){
	  		console.log($scope.selectedDeveloper);
	  		//$scope.selectedDeveloper = this.developer;
	  	}

	  	$scope.assignDeveloper = function(){
	  		CabData.saveResourceAssignment($scope.selectedDeveloper.DeveloperId, $scope.cab.CAB_HD_No);
	  		window.location="#/home";
	  	}
    }