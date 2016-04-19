'use strict';

angular
        .module('app')
        .controller('TaskingController', TaskingController);

    TaskingController.$inject = ['$location', 'CabData', '$scope', '$cookieStore', '$timeout'];
    function TaskingController($location, CabData, $scope, $cookieStore, $timeout) {
        var vmd = this;

        CabData.getTaskingData(function(callback){
            $scope.taskingDetails = callback;
        }); 

        $scope.addTaskBtnShow = true;
        $scope.editTaskBtnShow = false;

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
        

        $scope.selectCAB = function(){
            $scope.selectedCAB = this.tasking;

            CabData.getAllTasksData(function(callback){
                $scope.allTasks = callback;
        	}, $scope.selectedCAB.CAB_HD_No); 

            console.log($scope.selectedCAB);
            console.log($scope.selectedCAB.StatusName);
        }

        $scope.selectCABTask = function(){
            var selectedTask = this.task;
            $scope.taskName = selectedTask.CAB_Task_Text;
            $scope.taskDescription = selectedTask.Task_Text;
            $scope.taskHours = selectedTask.WorkingHours;
            $scope.CabHD_No_Task = selectedTask.CabHD_No_Task;
            console.log(selectedTask.CAB_Task_Id)
            $scope.taskId = selectedTask.CAB_Task_Id;
            $scope.selectedIndexOfallTasks = $scope.allTasks.indexOf(selectedTask);

            $scope.addTaskBtnShow = false;
            $scope.editTaskBtnShow = true;
        }
        
        $scope.editTask = function(){            
            var task = {"CAB_Task_Id" : $scope.taskId, "CabHD_No_Task" : $scope.CabHD_No_Task, "CAB_Task_Text" : $scope.taskName, "WorkingHours": $scope.taskHours, "CAB_Task_Create_Date" : "", "Task_Text": $scope.taskDescription}
            $scope.allTasks[$scope.selectedIndexOfallTasks] = task;

            $scope.addTaskBtnShow = true;
            $scope.editTaskBtnShow = false;
        }        

        $scope.addTask = function(){        	
        	var task = {"CAB_Task_Id" : "", "CabHD_No_Task" : $scope.allTasks.length+1, "CAB_Task_Text" : $scope.taskName, "WorkingHours": $scope.taskHours, "CAB_Task_Create_Date" : "", "Task_Text": $scope.taskDescription}
        	$scope.allTasks.push(task);
        }



        var updateTasks = function(){
            for(var i=0; i<$scope.allTasks.length; i++)
            {
                $scope.allTasks[i].CAB_Task_Create_Date = "";
                
                if($scope.allTasks[i].CAB_Task_Id != "")
                {
                    CabData.updateTask(parseInt($scope.allTasks[i].CAB_Task_Id, 10), parseInt($scope.allTasks[i].CabHD_No_Task, 10), $scope.allTasks[i].CAB_Task_Text, parseInt($scope.allTasks[i].WorkingHours, 10), $scope.allTasks[i].Task_Text);
                }
                else
                {
                    CabData.newTask($scope.selectedCAB.CAB_HD_No, parseInt($scope.allTasks[i].CabHD_No_Task, 10), $scope.allTasks[i].CAB_Task_Text, parseInt($scope.allTasks[i].WorkingHours, 10), $scope.allTasks[i].Task_Text, $cookieStore.get('globals').currentUser.username);
                }                
            }

            $timeout(function() {
                CabData.getAllTasksData(function(callback){
                    $scope.allTasks = callback;
                }, $scope.selectedCAB.CAB_HD_No); 
            }, 3000);            
        }

        $scope.saveCAB = function(){
            
            updateTasks();

            CabData.saveAnalyzeStatus($scope.selectedCAB.CAB_HD_No, 10);
            window.location = '#/developerHome';
        }

        $scope.updateTasks = function(){
            updateTasks();
        }
    }