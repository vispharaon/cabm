'use strict';

angular
        .module('app')
        .controller('CloseCABController', CloseCABController);

    CloseCABController.$inject = ['UserService', '$rootScope', '$scope', 'CabData'];
    function CloseCABController(UserService, $rootScope, $scope, CabData) {
        var vmd = this;

        CabData.getProductionDeploymentData(function(callback){
            $scope.closing = callback;
        }); 

        $scope.unchecked = true;

        angular.element(document).ready(function () {
            $(function() {    
                $("#iShow").hide();
                $("#infoNewDeveloper").hide();
                $("#aBackToTaskTable").hide();
                $("#divTaskInfo").hide();
                $(".datepicker").datepicker();
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
            }); 
        }); //angular.document.ready
        
        //$scope.selectedCAB = [];

        $scope.check = function(){
        	$scope.unchecked = !$scope.checked;
        }

        $scope.selectCAB = function(){
            $scope.selectedCAB = this.close;
            console.log($scope.selectedCAB);
            console.log($scope.selectedCAB.StatusName);
        }

 		$scope.saveCloseCAB = function(){
 			CabData.saveAnalyzeStatus($scope.selectedCAB.CAB_HD_No, 30);
 			window.location="#/developerHome";
 		}

    }