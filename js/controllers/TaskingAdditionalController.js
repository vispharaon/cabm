use 'strict'

angular
        .module('app')
        .controller('TaskingAdditionalController', TaskingAdditionalController);

    TaskingAdditionalController.$inject = ['$location'];
    function TaskingAdditionalController($location) {
        var vmd = this;
    }