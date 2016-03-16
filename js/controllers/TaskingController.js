use 'strict'

angular
        .module('app')
        .controller('TaskingController', TaskingController);

    TaskingController.$inject = ['$location'];
    function TaskingController($location) {
        var vmd = this;
    }