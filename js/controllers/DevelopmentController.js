'use strict';

angular
        .module('app')
        .controller('DevelopmentController', DevelopmentController);

    DevelopmentController.$inject = ['$location'];
    function DevelopmentController($location) {
        var vmd = this;

        $(function() {
    $( "#datepicker" ).datepicker();
	$("#iShow").hide();
	$("#infoNewDeveloper").hide();
	$("#aBackToTaskTable").hide();
	$("#divTaskInfo").hide();
	
  });
  
$(document).ready(function(){
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


    }