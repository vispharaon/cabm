'use strict';

 angular
        .module('app')
        .controller('CabController', CabController);

    CabController.$inject = ['$rootScope', '$scope', 'CabData'];
    function CabController($rootScope, $scope, CabData) {

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
	});
  
    var vm = this;
    vm.selectedCAB = CabData.selectedHomeCAB;
    $scope.id = vm.selectedCAB.CAB_HD_No;

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

  	//Where to go logics
  	$scope.wtgButtonShow = function(){
  		if($scope.cabMainDetails.StatusName == 'Received')
  			return true;
  		return false;
  	}

  	//Voting part
  	$scope.cabVoteDetails = CabData.cabVoteDetails;  	
  	$scope.votinglabel = "Voting";

  	/*$scope.voteClick = function () {
		if($scope.showVoting==true)
		    $scope.showVoting=false;
		else
		    $scope.showVoting=true;
	};*/

	//Analyze part
	$scope.analyzelabel = "Analiza";
	$scope.cabAnalyzeDetails = CabData.cabAnalyzeDetails;

	/*$scope.analyzeClick = function () {
	    if($scope.showAnalysis==true)
	        $scope.showAnalysis=false;
	    else
	        $scope.showAnalysis=true;
		  };
	*/	  

	//Tasking part
	$scope.taskinglabel = "Taskiranje"
	$scope.cabTaskingDetails = CabData.cabTaskingDetails;

	/*$scope.taskingClick = function () {
	    if($scope.showTasking==true)
	        $scope.showTasking=false;
	    else
	        $scope.showTasking=true;
	  };*/

	//Code Review
	$scope.codeReviewlabel = "Code review";
	$scope.cabCodeReviewDetails = CabData.cabCodeReviewDetails;

	/*$scope.codereviewClick = function () {
	    if($scope.showCodeReview==true)
	        $scope.showCodeReview=false;
	    else
	        $scope.showCodeReview=true;
	  };*/

	$scope.unitTestlabel = 'Unit test';
	$scope.cabUnitTestDetails = CabData.cabUnitTestDetails;

	/*$scope.unittestClick = function () {
	    if($scope.showUnitTest==true)
	        $scope.showUnitTest=false;
	    else
	        $scope.showUnitTest=true;
	  };*/

	$scope.testinglabel = "Testiranje";
	$scope.cabTestingDetails = CabData.cabTestingDetails;

	/*$scope.testingClick = function () {
	    if($scope.showTesting==true)
	        $scope.showTesting=false;
	    else
	        $scope.showTesting=true;
	  };*/

	$scope.developinglabel = "Developing";
	$scope.cabDevelopingDetails = CabData.cabDevelopingDetails;

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

		  	$scope.showVoting = false;
			$scope.showAnalysis = false;
			$scope.showTasking = false;
			$scope.showCodeReview = false;
			$scope.showUnitTest = false;
			$scope.showTesting = false;
			$scope.showDeveloping = false;

			$scope.voteImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;

			  return yesOrNo;
			};

			$scope.analyzeImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonNo;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};

			$scope.taskingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonNo;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};

			$scope.codereviewImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};

			$scope.unittestImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};

			$scope.testingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};

			$scope.developingImageYesNo = function(){
			  var yesOrNo = $scope.cabImages.buttonYes;
			  //if(status...) yesOrNo = yesorno;
			  return yesOrNo;
			};
    }

