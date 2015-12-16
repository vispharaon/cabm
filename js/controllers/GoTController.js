'use strict';

app.controller('GoTController',
    function ($scope, GoTData) {
        $scope.test = 'Šaljem poruku preko angulara';

        $scope.event = GoTData.event;

        $scope.filterFamily = 'ESSOS';
        //GoTData.getIMDBData(function (cb) {
        //    $scope.servicetest = cb
        //});
        $scope.selected = [];
        $scope.openCharacterDetails = function () {
            $scope.selected = this.session;
            console.log('/Caster/' + $scope.selected.id);
            window.location = '/Caster/Index/' + $scope.selected.id;
            console.log($scope.selected.id);
        }
        $scope.filterNoOf = 5;

        $scope.loadMore = function () {
            //var last = $scope.images[$scope.images.length - 1];
            //for(var i = 1; i <= 8; i++) {
            //    $scope.images.push(last + i);
            //}
            $scope.filterNoOf += 2;
            console.log($scope.filterNoOf);
        };

        $scope.hoverIn = function () {
            this.hoverEdit = true;
        };

        $scope.hoverOut = function () {
            this.hoverEdit = false;
        };

        $scope.sortorder = '';
        $scope.imageAlive = 'http://upload.wikimedia.org/wikipedia/commons/a/ac/Approve_icon.svg';
        $scope.imageDead = 'http://us.cdn3.123rf.com/168nwm/vladru/vladru1109/vladru110900014/10552453-abstract-red-sign-no-done-in-3d.jpg';
    }
);

function EventController($scope){
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