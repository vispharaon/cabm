'use strict';

app.factory('CabData',
		function ($http, $log) {
			this.selectedHomeCAB = [];

			var serverName = "http://cabapis.azurewebsites.net";
			var apiType = "/api/";
			
			return{
				getAllCABAPI: function(cabs){
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'cab' }).
	                //$http({ method: 'GET', dataType: 'jsonp', url: 'http://localhost:56798/api/cab' }).
	                   success(function (data, status, headers, config) {
	                       // this callback will be called asynchronously
	                       // when the response is available
	                       //successcb(data);
	                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
	                       console.log(data[0].CAB_Department, data[0].CAB_HD_Date, data[0].CAB_HD_No, data[0].CAB_HD_Title, data[0].CAB_Id, 
	                        data[0].CAB_Note, data[0].CAB_Priority, data[0].CAB_Sender, data[0].CAB_Type, data[0].Developer_Comment);
	                       //$log.warn(data, status, headers, config);
	                        cabs(data);
	                       //return data[0];
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            	},
            	getCabAPI: function (successcb, cabhdno) {

                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'cab', params: { id: cabhdno }}).
                   success(function (data, status, headers, config) {
                       // this callback will be called asynchronously
                       // when the response is available
                       //successcb(data);
                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;                       
                       //$log.warn(data, status, headers, config);
                        successcb(data, cabhdno);
                       //return data[0];
                   }).
                   error(function (data, status, headers, config) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.
                       console.log(cabhdno);
                       console.log(data);
                       //$log.warn(data, status, headers, config);
                    
                   });},
                   /*cabVoteDetails: {
		                votename:'',
		                votelastname: '',
		                votedate: ''
		            },*/
                   getCabVoteDetails: function (successcb, cabhdno) {

	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'cabvoting', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },                   
		            /*cabAnalyzeDetails: {
		                analyzename:'',
		                analyzelastname: '',
		                analyzepredictedwh: '',
		                analyzenote: ''
		            },*/
		            getCabAnalyzeDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABAnalysis', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },
	                /*cabTaskingDetails: {
		                taskingname:'',
		                taskinglastname:'',
		                taskinghours:0,
		                taskingnooftask:0
		            },*/
	                getCabTaskingDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABTaska', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },		            
		            /*cabCodeReviewDetails: {
		                codereviewdone: true,
		                codereviewtasker: ''
		            },*/
		            getCabCodeReviewDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABCodeReview', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },
		            /*cabUnitTestDetails: {
		                unittestdone: true,
		                unittestdevelopers: [
		                    {name: 'Amar Hajro'},
		                    {name: 'Suljo Suljić'}
		              ]
		            },*/
		            getCabUnitTestDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'Developers', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },
		            /*cabTestingDetails: {
		                qavalidationdone: true,
		                qavalidationdate: '17.04.2015',
		                qatestingdone: true,
		                qatestingdate: '17.04.2015',
		                businesstestingdone: true,
		                businesstestingdate: '17.04.2015',

		                comments: [
		                    {testingname: 'Amar Hajro', testingcomment: 'Ovo je komentar na testni slucaj 1. Testiranje će biti završeno kada bude sve ok!', dateofcomment: '17.04.2015'},
		                    {testingname: 'Amar Hajro', testingcomment: 'Ovo je komentar na testni slucaj 1. Testiranje će biti završeno kada bude sve ok!', dateofcomment: '17.04.2015'},
		                    {testingname: 'Amar Hajro', testingcomment: 'Ovo je komentar na testni slucaj 1. Testiranje će biti završeno kada bude sve ok!', dateofcomment: '17.04.2015'}
		                ]
		            },*/
		            getCabTestingDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABTesting', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },
		            /*cabDevelopingDetails: {
		              tasks: [
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Scheduled', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Developing 10%', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Development Done', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 2', taskdeveloper: 'Amar Hajro', taskstatus: 'Scheduled', tasklastchange: '17.04.2015' }    
		              ]
		            },*/
		            getCabDevelopingDetails: function (successcb, cabhdno) {
	                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'TaskHistory', params: { id: cabhdno }}).
	                   success(function (data, status, headers, config) {
	                        successcb(data, cabhdno);
	                   }).
	                   error(function (data, status, headers, config) {
	                       console.log(cabhdno);
	                       console.log(data);
	                    
	                   });
	                },
		            saveNewCAB: function(cab){
		            	console.log(serverName + apiType + 'cab');
	                $http({ method: 'POST', dataType: 'jsonp', url: serverName + apiType + 'cab', data: JSON.stringify(cab), headers: {'Content-Type': "application/json"} }).
	                   success(function (data, status, headers, config) {
	                       // this callback will be called asynchronously
	                       // when the response is available
	                       //successcb(data);
	                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
	                       //console.log(data[0].lokacija, data[0].namjesten, data[0].brojSoba, data[0].telefon, data[0].email, 
	                        //data[0].cijena, data[0].dodatnoOpis, data[0].grijanje, data[0].balkon, data[0].kucaZgrada);
	                       //$log.warn(data, status, headers, config);
	                        //stanovi(data);
	                       //return data[0];
	                       console.log('success');	                       
	                       console.log(status);
	                       window.location = '#/';
	                       return status;
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       console.log(status);
	                       console.log(headers);
	                       console.log(config);
	                       return status;
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            		},
            		saveCABToWTG: function(id){
            				console.log(serverName + apiType + 'cab');
		                $http({ method: 'POST', dataType: 'jsonp', url: serverName + apiType + 'CABVoting', params: { id: id }}).
		                   success(function (data, status, headers, config) {
		                       // this callback will be called asynchronously
		                       // when the response is available
		                       //successcb(data);
		                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
		                       //console.log(data[0].lokacija, data[0].namjesten, data[0].brojSoba, data[0].telefon, data[0].email, 
		                        //data[0].cijena, data[0].dodatnoOpis, data[0].grijanje, data[0].balkon, data[0].kucaZgrada);
		                       //$log.warn(data, status, headers, config);
		                        //stanovi(data);
		                       //return data[0];
		                       console.log('success');	                       
		                       console.log(status);
		                       window.location = '#/';
		                       return status;
		                   }).
		                   error(function (data, status, headers, config) {
		                       // called asynchronously if an error occurs
		                       // or server returns response with an error status.
		                       console.log(data);
		                       console.log(status);
		                       console.log(headers);
		                       console.log(config);
		                       return status;
		                       //$log.warn(data, status, headers, config);
		                    
		                   });
            		},
            		getVoteData: function(callback){
            			$http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABVoting' }).
	                    	success(function (data, status, headers, config) {
	                   	    console.log("success CABVoting " + data);
	                        callback(data);	                       
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            		},
            		saveVotingDone: function(id, cabDateFrom, cabDateTo, voter){
            			$http({ method: 'POST', dataType: 'jsonp', url: serverName + apiType + 'CABVoting', params: { id: id, datefrom: cabDateFrom, dateto: cabDateTo, voter: voter }}).
		                   success(function (data, status, headers, config) {		                       
		                       console.log('success');	                       
		                       console.log(status);
		                       window.location = '#/development';
		                       return status;
		                   }).
		                   error(function (data, status, headers, config) {
		                       // called asynchronously if an error occurs
		                       // or server returns response with an error status.
		                       console.log(data);
		                       console.log(status);
		                       console.log(headers);
		                       console.log(config);
		                       return status;
		                       //$log.warn(data, status, headers, config);
		                    
		                   });
            		},
            		getAnalyzeData: function(callback){
            			$http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'CABAnalysis' }).
	                    	success(function (data, status, headers, config) {
	                   	    console.log("success CABAnalysis " + data);
	                        callback(data);	                       
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            		},
		            /*,		            
		            getAllStanovi: function(stanovi){
	                $http({ method: 'GET', dataType: 'jsonp', url: 'http://cabapi.somee.com/api/stan' }).
	                   success(function (data, status, headers, config) {
	                       // this callback will be called asynchronously
	                       // when the response is available
	                       //successcb(data);
	                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
	                       console.log(data[0].lokacija, data[0].namjesten, data[0].brojSoba, data[0].telefon, data[0].email, 
	                        data[0].cijena, data[0].dodatnoOpis, data[0].grijanje, data[0].balkon, data[0].kucaZgrada);
	                       //$log.warn(data, status, headers, config);
	                        stanovi(data);
	                       //return data[0];
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            	},
            	saveStan: function(stan){
	                $http({ method: 'POST', dataType: 'jsonp', url: 'http://cabapi.somee.com/api/stan', data: stan }).
	                   success(function (data, status, headers, config) {
	                       // this callback will be called asynchronously
	                       // when the response is available
	                       //successcb(data);
	                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
	                       //console.log(data[0].lokacija, data[0].namjesten, data[0].brojSoba, data[0].telefon, data[0].email, 
	                        //data[0].cijena, data[0].dodatnoOpis, data[0].grijanje, data[0].balkon, data[0].kucaZgrada);
	                       //$log.warn(data, status, headers, config);
	                        //stanovi(data);
	                       //return data[0];
	                       console.log('success');
	                   }).
	                   error(function (data, status, headers, config) {
	                       // called asynchronously if an error occurs
	                       // or server returns response with an error status.
	                       console.log(data);
	                       console.log(status);
	                       console.log(headers);
	                       
	                       //$log.warn(data, status, headers, config);
	                    
	                   });
            	}*/
			}
		}
	);