'use strict';

app.factory('CabData',
		function ($http, $log) {
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
            	getCabAPI: function (successcb) {
                $http({ method: 'GET', dataType: 'jsonp', url: serverName + apiType + 'cab'}).
                   success(function (data, status, headers, config) {
                       // this callback will be called asynchronously
                       // when the response is available
                       //successcb(data);
                       //cabMainDetails.cabhdno = data[0].CAB_HD_No;
                       console.log(data[0].CAB_Department, data[0].CAB_HD_Date, data[0].CAB_HD_No, data[0].CAB_HD_Title, data[0].CAB_Id, 
                        data[0].CAB_Note, data[0].CAB_Priority, data[0].CAB_Sender, data[0].CAB_Type, data[0].Developer_Comment);
                       //$log.warn(data, status, headers, config);
                        successcb(data[0]);
                       //return data[0];
                   }).
                   error(function (data, status, headers, config) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.
                       console.log(data);
                       //$log.warn(data, status, headers, config);
                    
                   });},
                   cabVoteDetails: {
		                votename:'',
		                votelastname: '',
		                votedate: ''
		            },
		            cabAnalyzeDetails: {
		                analyzename:'',
		                analyzelastname: '',
		                analyzepredictedwh: '',
		                analyzenote: ''
		            },
		            cabTaskingDetails: {
		                taskingname:'',
		                taskinglastname:'',
		                taskinghours:0,
		                taskingnooftask:0
		            },
		            cabCodeReviewDetails: {
		                codereviewdone: true,
		                codereviewtasker: ''
		            },
		            cabUnitTestDetails: {
		                unittestdone: true,
		                unittestdevelopers: [
		                    {name: 'Amar Hajro'},
		                    {name: 'Suljo Suljić'}
		              ]
		            },
		            cabTestingDetails: {
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
		            },
		            cabDevelopingDetails: {
		              tasks: [
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Scheduled', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Developing 10%', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 1', taskdeveloper: 'Amar Hajro', taskstatus: 'Development Done', tasklastchange: '17.04.2015' },
		                {taskname: 'Testni task 2', taskdeveloper: 'Amar Hajro', taskstatus: 'Scheduled', tasklastchange: '17.04.2015' }    
		              ]
		            }/*,		            
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