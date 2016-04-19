'use strict';

    angular
        .module('app')
        .controller('QAValidationController', QAValidationController);

    QAValidationController.$inject = ['UserService', '$rootScope', '$scope', 'CabData', '$cookieStore'];
    function QAValidationController(UserService, $rootScope, $scope, CabData, $cookieStore) {
        var vmd = this;

        CabData.getQAValidationData(function(callback){
            $scope.qaValidationDetails = callback;
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
            $scope.selectedCAB = this.validation;
            console.log($scope.selectedCAB);
            console.log($scope.selectedCAB.StatusName);
            if($scope.selectedCAB.StatusName == 'Waiting for QA Validation')
            {
                CabData.saveAnalyzeStatus($scope.selectedCAB.CAB_HD_No, 7);
            }
        }

        $scope.saveCAB = function(){            
            console.log("current user: " + $cookieStore.get('globals').currentUser.username);
            CabData.saveQAValidationDone($scope.selectedCAB.CAB_HD_No, $scope.qaValidationDescription, $cookieStore.get('globals').currentUser.username);
        }

        $scope.saveDeclinedCAB = function(){            
            CabData.saveAnalyzeStatus($scope.selectedCAB.CAB_HD_No, 5);
            window.location = '#/DeveloperHome';
        }
    }