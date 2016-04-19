'use strict';

 angular
        .module('app')
        .controller('CabController', CabController);

    CabController.$inject = ['$rootScope', '$scope', 'CabData', '$timeout'];
    function CabController($rootScope, $scope, CabData, $timeout) {

    if(typeof CabData.selectedHomeCAB !== "undefined")
   		$scope.cab = CabData.selectedHomeCAB;

    $(function() {    
    	//CAB Details
		$("#iShow").hide();
		$("#infoCABDetails").hide();
		//Voting	
		$("#iHideVoting").hide();
		$("#infoVotingEmpty").hide();
		$("#formShowHideVoting").hide();
		//Analyze	
		$("#iHideAnalyze").hide();
		$("#infoAnalyzeEmpty").hide();
		$("#formShowHideAnalyze").hide();
		//Tasking
		$("#iHideTasking").hide();
		$("#infoTaskingEmpty").hide();
		$("#formShowHideTasking").hide();
		//CodeReview		
		$("#iHideCodeReview").hide();
		$("#infoCodeReviewEmpty").hide();
		$("#formShowHideCodeReview").hide();
		//UnitTest
		$("#iHideUnitTest").hide();
		$("#infoUnitTestEmpty").hide();
		$("#formShowHideUnitTest").hide();
		//Testing
		$("#iHideTesting").hide();
		$("#infoTestingEmpty").hide();
		$("#formShowHideTesting").hide();
		//Developing
		$("#iHideDeveloping").hide();
		$("#infoDevelopingEmpty").hide();
		$("#formShowHideDeveloping").hide();

		$( ".datepicker" ).datepicker();
  	});

  	console.log("CAB hd no: " + $scope.cab.CAB_HD_No);

    var vm = this;
    $scope.id = $scope.cab.CAB_HD_No;

	//Details CAB variables
  	$scope.detailsCABlabel = 'Detalji CAB zahtjeva';

	CabData.getCabAPI(function(cabdetails){
	    $scope.cabMainDetails = cabdetails;
	}, $scope.id);

	$scope.cabImages ={
	    buttonYes: 'img/round-yes-button.png',
	    altButtonYes: '',
	    buttonNo: 'img/round-no-button.png',
	    altButtonNo: '',
	};	

	$scope.openResourcePage = function(){
		CabData.selectedHomeCAB = $scope.cabMainDetails;
		window.location = '#/Resource';
	}

  	//Where to go logics
  	$scope.sendWTG = function(){
  		CabData.saveCABToWTG($scope.id);    
  	}

  	//Voting part
  	//$scope.cabVoteDetails = CabData.cabVoteDetails;
  	CabData.getCabVoteDetails(function(voteDetails){
	    $scope.cabVoteDetails = voteDetails;
	    if($scope.cabVoteDetails == null)
	    	$scope.voteImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.voteImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);

  	$scope.votinglabel = "Voting";
  	/*$scope.voteImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;

			  //if(status...) yesOrNo = yesorno;

			  return yesOrNo;
			};*/

  	/*$scope.voteClick = function () {
		if($scope.showVoting==true)
		    $scope.showVoting=false;
		else
		    $scope.showVoting=true;
	};*/

	//Analyze part
	$scope.analyzelabel = "Analiza";
	//$scope.cabAnalyzeDetails = CabData.cabAnalyzeDetails;
	CabData.getCabAnalyzeDetails(function(analyzeDetails){
	    $scope.cabAnalyzeDetails = analyzeDetails;
	    if($scope.cabAnalyzeDetails == null)
	    	$scope.analyzeImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.analyzeImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);

	/*$scope.analyzeImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonNo;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};
	*/

	/*$scope.analyzeClick = function () {
	    if($scope.showAnalysis==true)
	        $scope.showAnalysis=false;
	    else
	        $scope.showAnalysis=true;
		  };
	*/	  

	//Tasking part
	$scope.taskinglabel = "Taskiranje"
	//$scope.cabTaskingDetails = CabData.cabTaskingDetails;
	CabData.getCabTaskingDetails(function(taskingDetails){
	    $scope.cabTaskingDetails = taskingDetails;
	    if($scope.cabTaskingDetails == null)
	    	$scope.taskingImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.taskingImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);

	/*$scope.taskingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonNo;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};*/

	/*$scope.taskingClick = function () {
	    if($scope.showTasking==true)
	        $scope.showTasking=false;
	    else
	        $scope.showTasking=true;
	  };*/

	//Code Review
	$scope.codeReviewlabel = "Code review";
	//$scope.cabCodeReviewDetails = CabData.cabCodeReviewDetails;
	CabData.getCabCodeReviewDetails(function(codeReviewDetails){
	    $scope.cabCodeReviewDetails = codeReviewDetails;
	    if($scope.cabCodeReviewDetails == null)
	    	$scope.codeReviewImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.codeReviewImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);

	/*$scope.codereviewImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};*/

	/*$scope.codereviewClick = function () {
	    if($scope.showCodeReview==true)
	        $scope.showCodeReview=false;
	    else
	        $scope.showCodeReview=true;
	  };*/

	$scope.unitTestlabel = 'Unit test';
	//$scope.cabUnitTestDetails = CabData.cabUnitTestDetails;
	CabData.getCabUnitTestDetails(function(unitTestDetails){
	    $scope.cabUnitTestDetails = unitTestDetails;
	    if($scope.cabUnitTestDetails == null)
	    	$scope.unitTestImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.unitTestImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);
	/*$scope.unittestImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};*/

	/*$scope.unittestClick = function () {
	    if($scope.showUnitTest==true)
	        $scope.showUnitTest=false;
	    else
	        $scope.showUnitTest=true;
	  };*/

	$scope.testinglabel = "Testiranje";
	//$scope.cabTestingDetails = CabData.cabTestingDetails;
	CabData.getCabTestingDetails(function(testingDetails){
	    $scope.cabTestingDetails = testingDetails;
	    if($scope.cabTestingDetails == null)
	    	$scope.testingImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.testingImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);
	/*$scope.testingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};*/

	/*$scope.testingClick = function () {
	    if($scope.showTesting==true)
	        $scope.showTesting=false;
	    else
	        $scope.showTesting=true;
	  };*/

	$scope.developinglabel = "Developing";
	//$scope.cabDevelopingDetails = CabData.cabDevelopingDetails;
	CabData.getCabDevelopingDetails(function(developingDetails){
	    $scope.cabDevelopingDetails = developingDetails;
	    if($scope.cabDevelopingDetails == null)
	    	$scope.developingImageYesNo = $scope.cabImages.buttonNo;
	    else
	    	$scope.developingImageYesNo = $scope.cabImages.buttonYes;
	}, $scope.id);
	/*$scope.developingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};*/
			
	/*$scope.developingClick = function () {
	    if($scope.showDeveloping==true)
	        $scope.showDeveloping=false;
	    else
	        $scope.showDeveloping=true;
	  };*/

		$scope.getCABTypes = function () {
		    var  res = [];    
		    
		    res.push('Normal');
		    res.push('High');
		    res.push('E-CAB');
		        return res;
		};

		$scope.getCABPriorities = function () {
		     var  res = [];         
		       res.push('Normal');
		       res.push('High');
		       res.push('Critical');
		       res.push('E-CAB');
		          return res;
		  };

		  $scope.getCABSenders = function () {
		     var  res = [];   
		       res.push('IT-Operacije');
		       res.push('Razvoj');
		       res.push('Retail');
		       res.push('UPP');
		       res.push('Podrška procesima');
		     return res;
		  };

		$scope.getCABITDepartments = function () {
		     var  res = [];   
		       res.push('Razvoj');
		       res.push('Operacije');
		       res.push('Mreže');
		       res.push('DBA');
		       res.push('DWH');
		     return res;
		  }; 

		  	/*$scope.showVoting = false;
			$scope.showAnalysis = false;
			$scope.showTasking = false;
			$scope.showCodeReview = false;
			$scope.showUnitTest = false;
			$scope.showTesting = false;
			$scope.showDeveloping = false; */

			  	$(document).ready(function(){
  		//CAB Details
	    $("#iHide").click(function(){
	        $("#formShowHide").hide(500);
			$("#iShow").show();
			$("#iHide").hide();
			$("#infoCABDetails").show();
			$("#infoCABDetailsEmpty").hide();
	    });		
		$("#iShow").click(function(){
	        $("#formShowHide").show(500);
			$("#iShow").hide();
			$("#iHide").show();
			$("#infoCABDetails").hide();
			$("#infoCABDetailsEmpty").show();
	    });
	    //Voting
	    $("#iHideVoting").click(function(){
	        $("#formShowHideVoting").hide(500);
			$("#iShowVoting").show();
			$("#iHideVoting").hide();
			$("#infoVoting").show();
			$("#infoVotingEmpty").hide();
	    });		
		$("#iShowVoting").click(function(){
	        $("#formShowHideVoting").show(500);
			$("#iShowVoting").hide();
			$("#iHideVoting").show();
			$("#infoVoting").hide();
			$("#infoVotingEmpty").show();
	    });
	    //Analyze
	    $("#iHideAnalyze").click(function(){
	        $("#formShowHideAnalyze").hide(500);
			$("#iShowAnalyze").show();
			$("#iHideAnalyze").hide();
			$("#infoAnalyze").show();
			$("#infoAnalyzeEmpty").hide();
	    });		
		$("#iShowAnalyze").click(function(){
	        $("#formShowHideAnalyze").show(500);
			$("#iShowAnalyze").hide();
			$("#iHideAnalyze").show();
			$("#infoAnalyze").hide();
			$("#infoAnalyzeEmpty").show();
	    });
	    //Tasking
	    $("#iHideTasking").click(function(){
	        $("#formShowHideTasking").hide(500);
			$("#iShowTasking").show();
			$("#iHideTasking").hide();
			$("#infoTasking").show();
			$("#infoTaskingEmpty").hide();
	    });		
		$("#iShowTasking").click(function(){
	        $("#formShowHideTasking").show(500);
			$("#iShowTasking").hide();
			$("#iHideTasking").show();
			$("#infoTasking").hide();
			$("#infoTaskingEmpty").show();
	    });
	    //CodeReview
	    $("#iHideCodeReview").click(function(){
	        $("#formShowHideCodeReview").hide(500);
			$("#iShowCodeReview").show();
			$("#iHideCodeReview").hide();
			$("#infoCodeReview").show();
			$("#infoCodeReviewEmpty").hide();
	    });		
		$("#iShowCodeReview").click(function(){
	        $("#formShowHideCodeReview").show(500);
			$("#iShowCodeReview").hide();
			$("#iHideCodeReview").show();
			$("#infoCodeReview").hide();
			$("#infoCodeReviewEmpty").show();
	    });
	    //UnitTest
	    $("#iHideUnitTest").click(function(){
	        $("#formShowHideUnitTest").hide(500);
			$("#iShowUnitTest").show();
			$("#iHideUnitTest").hide();
			$("#infoUnitTest").show();
			$("#infoUnitTestEmpty").hide();
	    });		
		$("#iShowUnitTest").click(function(){
	        $("#formShowHideUnitTest").show(500);
			$("#iShowUnitTest").hide();
			$("#iHideUnitTest").show();
			$("#infoUnitTest").hide();
			$("#infoUnitTestEmpty").show();
	    });
	    //Testing
	    $("#iHideTesting").click(function(){
	        $("#formShowHideTesting").hide(500);
			$("#iShowTesting").show();
			$("#iHideTesting").hide();
			$("#infoTesting").show();
			$("#infoTestingEmpty").hide();
	    });		
		$("#iShowTesting").click(function(){
	        $("#formShowHideTesting").show(500);
			$("#iShowTesting").hide();
			$("#iHideTesting").show();
			$("#infoTesting").hide();
			$("#infoTestingEmpty").show();
	    });
	    //Developing
	    $("#iHideDeveloping").click(function(){
	        $("#formShowHideDeveloping").hide(500);
			$("#iShowDeveloping").show();
			$("#iHideDeveloping").hide();
			$("#infoDeveloping").show();
			$("#infoDevelopingEmpty").hide();
	    });		
		$("#iShowDeveloping").click(function(){
	        $("#formShowHideDeveloping").show(500);
			$("#iShowDeveloping").hide();
			$("#iHideDeveloping").show();
			$("#infoDeveloping").hide();
			$("#infoDevelopingEmpty").show();
	    });

	    $scope.showResourcesBtn = function(){
	    	if(angular.isUndefined($scope.cabMainDetails)) return false;
			if($scope.cabMainDetails.StatusName == "Waiting for Resources")
				return true;
			return false;
		}

	  	$scope.wtgButtonShow = function(){
	  		if(angular.isUndefined($scope.cabMainDetails)) return false;
	  		if($scope.cabMainDetails.StatusName == 'Received')
	  			return true;
	  		return false;
	  	}
	});
    }

