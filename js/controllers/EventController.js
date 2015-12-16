'use strict';
eventsApp.controller('EventController',
	function EventController($scope, CabData, $http){

//$http.post('http://cabapi.somee.com/api/user').
//  success(function(data, status, headers, config){
//        console.log(data);
//      }).
//      error(function(data,status,header, config){
//        console.log(data);
//      });
    

$scope.eventData = CabData.event;

$scope.cabs = [{cabhdno: 112201, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112202, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112203, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112204, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112205, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112206, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112207, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112208, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112209, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112210, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112211, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112212, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112213, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112214, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112215, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112216, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112217, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112218, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112219, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112220, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112221, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112222, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112223, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112224, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
                {cabhdno: 112225, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'}];

$scope.filterCABShow = 13;

//$scope.getTestAPIData = CabData.getDataForCABTest(); 
//$scope.getDataCabApi = CabData.getCabAPI();



$scope.cabImages ={
	imageNewCAB: 'img/document_add.png',
	altNewCAB: 'Dodaj Novi CAB',
    buttonYes: 'img/round-yes-button.png',
    altButtonYes: '',
    buttonNo: 'img/round-no-button.png',
    altButtonNo: '',
}


$scope.selected = [];
        $scope.openCharacterDetails = function () {
            $scope.selected = this.session;
            console.log('cabDetails.html/id=' + $scope.selected);
            console.log($scope.getDataCabApi);
           // CabData.getDataForCABTest(); 
            window.location = 'cabDetails.html';
            console.log($scope.selected);
        }

CabData.getAllCABAPI(function(cabs){
  $scope.allCabs = cabs;
});

CabData.getCabAPI(function(cabdetails){
    $scope.cabMainDetails = cabdetails;
});

//$scope.cabMainDetails = CabData.cabMainDetails;

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

        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.myclass = 'blue';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '29.08.2014',
            time: '09:45 pm',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this seison you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Intrudutory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                }
            ]
        };
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteSession = function(session) {
            session.upVoteSession--;
        };    
    }
);