'use strict';

angular
        .module('app')
        .controller('VoteController', VoteController);

    VoteController.$inject = ['$location'];
    function VoteController($location) {
        var vmd = this;
    }