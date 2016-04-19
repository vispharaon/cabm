'use strict';

angular
        .module('app')
        .controller('ChooseForTaskController', ChooseForTaskController);

    ChooseForTaskController.$inject = ['$location', 'CabData', '$scope', '$cookieStore'];
    function ChooseForTaskController($location, CabData, $scope, $cookieStore) {
        var vmd = this;

        CabData.getForTaskingData(function(callback){
            $scope.forTaskingDetails = callback;
        }); 


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

        $scope.selectCAB = function(){
            $scope.selectedCAB = this.forTasking;
            console.log($scope.selectedCAB);
            console.log($scope.selectedCAB.StatusName);
        }

        $scope.saveCAB = function(){            
            console.log("current user: " + $cookieStore.get('globals').currentUser.username);
            CabData.saveForTaskingDone($scope.selectedCAB.CAB_HD_No, $cookieStore.get('globals').currentUser.username);
        }
    }