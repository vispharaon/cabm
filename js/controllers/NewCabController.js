'use strict';

    angular
        .module('app')
        .controller('NewCabController', NewCabController);

    NewCabController.$inject = ['$scope', 'CabData'];
    function NewCabController($scope, CabData) {

        $(function() {
           $( ".datepicker" ).datepicker();
        });

        var vm = this;

        vm.user = null;
        vm.allUsers = [];
/*
public int CAB_HD_No { get; set; }
        public int CAB_Id { get; set; }
        public string CAB_Type { get; set; }
        public Nullable<System.DateTime> CAB_HD_Date { get; set; }
        public string CAB_HD_Title { get; set; }
        public string CAB_Sender { get; set; }
        public string CAB_Priority { get; set; }
        public string CAB_Note { get; set; }
        public string Developer_Comment { get; set; }
        public string CAB_Department { get; set; }
        */
        $scope.newCAB = {
            CAB_HD_No: 0,
            CAB_Id: 0,
            CAB_Type: '--Odaberi Tip--',
            CAB_HD_Date: '',
            CAB_HD_Title: '',
            CAB_Sender: '--Odaberi Pošiljaoca--',
            CAB_Priority: '--Odaberi Prioritet--',
            CAB_Note: '',
            Developer_Comment: '',
            CAB_Department: '--Odaberi Odjel--',
            tblAttachments: {},
            tblCABAnalysis: {},
            tblCABComment: {},
            tblCABHistory: {},
            tblCABStartEnd: {},
            tblCABTesting: {}
        };

        $scope.returnValue = {};

        $scope.saveCAB = function()        
        {   
            CabData.saveNewCAB($scope.newCAB);            
        }
    }