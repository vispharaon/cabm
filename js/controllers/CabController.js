'use strict';

 angular
        .module('app')
        .controller('CabController', CabController);

    CabController.$inject = ['$rootScope', '$scope', 'CabData'];
    function CabController($rootScope, $scope, CabData) {
        var vm = this;

		CabData.getCabAPI(function(cabdetails){
		    $scope.cabMainDetails = cabdetails;
		});

		$scope.cabImages ={
		    buttonYes: 'img/round-yes-button.png',
		    altButtonYes: '',
		    buttonNo: 'img/round-no-button.png',
		    altButtonNo: '',
		};

		$scope.cabVoteDetails = CabData.cabVoteDetails;

		$scope.cabAnalyzeDetails = CabData.cabAnalyzeDetails;

		$scope.cabTaskingDetails = CabData.cabTaskingDetails;

		$scope.cabCodeReviewDetails = CabData.cabCodeReviewDetails;

		$scope.cabUnitTestDetails = CabData.cabUnitTestDetails;

		$scope.cabTestingDetails = CabData.cabTestingDetails;

		$scope.cabDevelopingDetails = CabData.cabDevelopingDetails;


		$scope.voteClick = function () {
		    if($scope.showVoting==true)
		        $scope.showVoting=false;
		    else
		        $scope.showVoting=true;
		  };

		$scope.analyzeClick = function () {
		    if($scope.showAnalysis==true)
		        $scope.showAnalysis=false;
		    else
		        $scope.showAnalysis=true;
		  };
		  
		$scope.taskingClick = function () {
		    if($scope.showTasking==true)
		        $scope.showTasking=false;
		    else
		        $scope.showTasking=true;
		  };

		$scope.codereviewClick = function () {
		    if($scope.showCodeReview==true)
		        $scope.showCodeReview=false;
		    else
		        $scope.showCodeReview=true;
		  };

		$scope.unittestClick = function () {
		    if($scope.showUnitTest==true)
		        $scope.showUnitTest=false;
		    else
		        $scope.showUnitTest=true;
		  };

		$scope.testingClick = function () {
		    if($scope.showTesting==true)
		        $scope.showTesting=false;
		    else
		        $scope.showTesting=true;
		  };

		$scope.developingClick = function () {
		    if($scope.showDeveloping==true)
		        $scope.showDeveloping=false;
		    else
		        $scope.showDeveloping=true;
		  };
		$scope.getCABTypes = function () {
		    var  res = [];    
		    
		    res.push('Normal');
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

