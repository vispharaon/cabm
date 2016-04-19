'use strict';

angular
        .module('app')
        .controller('DevelopmentController', DevelopmentController);

    DevelopmentController.$inject = ['$location', '$cookieStore', 'CabData', '$scope'];
    function DevelopmentController($location, $cookieStore, CabData, $scope) {
        var vmd = this;

    $scope.precentageHundred = true;
    $scope.checked = false;

	console.log($cookieStore.get('globals').currentUser.username);
	
 	CabData.getDevelopmentTasks(function(callback){
            $scope.developerTasks = callback;
        }, $cookieStore.get('globals').currentUser.username); 

	   	$(function() {    
			$("#iShow").hide();
			$("#infoNewDeveloper").hide();
			$("#aBackToTaskTable").hide();
			$("#divTaskInfo").hide();
		});

	angular.element(document).ready(function(){
	    $("#iHide").click(function(){
	        $("#formShowHide").hide(500);
			$("#iShow").show();
			$("#iHide").hide();
			$("#infoNewDeveloper").show();
			$("#infoNewDeveloperEmpty").hide();
	    });
		
		 $("#iShow").click(function(){
	        $("#formShowHide").show(500);
			$("#iShow").hide();
			$("#iHide").show();
			$("#infoNewDeveloper").hide();
			$("#infoNewDeveloperEmpty").show();
	    });
		
		$('#jqTable').DataTable();
		
		$("#tbodyTasksTableItem").click(function(){
	        $("#aBackToTaskTable").show();
			$("#divTaskInfo").show(500);
			$("#divTasksTable").hide();
	    });
		$("#aBackToTaskTable").click(function(){
	        $("#aBackToTaskTable").hide();
			$("#divTaskInfo").hide();
			$("#divTasksTable").show(800);
	    });
		
		$("#progressBarForTaskAll").hover(function(){
	        $("#progressBarForTask").hide();
			$("#hiddenProgressBar").show();
	    },
		function() {
			$("#progressBarForTask").show();
			$("#hiddenProgressBar").hide();
		});
		
		/*$("#hiddenProgressBar").hover(function(){
	        $( this ).hide();
			$("#progressBarForTask").show();
	    });*/
	});
	
	$scope.selectedTask = [];
	$scope.selectedTask.Percentage = 0;

	$scope.selectCAB = function(){
		$scope.selectedTask = this.task;
		$scope.initialProgress = $scope.selectedTask.Percentage;
	}

	$scope.clickProgressBar = function(){
		$scope.selectedTask.Percentage = $scope.selectedTask.Percentage+10;
		if($scope.selectedTask.Percentage>100)
			$scope.selectedTask.Percentage = 100;

		$scope.precentageHundred = $scope.selectedTask.Percentage != 100;

		console.log($scope.precentageHundred);
	}

	$scope.resetProgress = function(){
		$scope.selectedTask.Percentage = $scope.initialProgress;
		$scope.precentageHundred = $scope.selectedTask.Percentage != 100;
		if($scope.precentageHundred)
			$scope.checked = false;
	}

	$scope.saveTaskProgress = function(){
		CabData.saveTaskProgress($scope.selectedTask.CAB_Task_Id, $scope.selectedTask.Percentage, $scope.checked);
		window.location = "#/developerHome";
	}
}