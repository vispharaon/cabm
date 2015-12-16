'use strict';

eventsApp.factory('CabData',
    function ($http, $log) {
        return {
            cabMainDetails: {
                            cabhdno: '',
                            cabtitle: '',
                            cabtype: '',
                            cabsender: '',
                            cabpriority: '',
                            cabdepartment: '',
                            cabdate: '',
                            cabstatus: 'Received'
                        },
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
            },
            getDataForCABTest: function () {
                $http({ method: 'GET', dataType: 'jsonp', url: 'http://cabapi.somee.com/api/user' }).
                   success(function (data, status, headers, config) {
                       // this callback will be called asynchronously
                       // when the response is available
                       //successcb(data);
                       console.log(data[0].Username);
                       //$log.warn(data, status, headers, config);
                       return data[0];
                   }).
                   error(function (data, status, headers, config) {
                       // called asynchronously if an error occurs
                       // or server returns response with an error status.
                       console.log(data);
                       //$log.warn(data, status, headers, config);
                       return 0;
                   });},

            getAllCABAPI: function(cabs){
                $http({ method: 'GET', dataType: 'jsonp', url: 'http://cabapi.somee.com/api/cab' }).
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
                $http({ method: 'GET', dataType: 'jsonp', url: 'http://cabapi.somee.com/api/cab'}).
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

            event: {
                name: 'Game of Thrones',
                date: '15/09/2014',
                time: '10:30 am',

                //imageUrl: '/angular-seed-0.10.x/app/img/AngularShieldLogo.png',
                sessions: [
                   {cabhdno: 112201, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'},
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
                {cabhdno: 112225, cabtitle: 'Testni CAB zahtjev', cabtype: 'Normal', sender: 'Operacije', priority: 'Normal', date: '15.04.2015'}
                ]

            }
        }
    }
);