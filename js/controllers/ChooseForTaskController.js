use 'strict'

angular
        .module('app')
        .controller('ChooseForTaskController', ChooseForTaskController);

    ChooseForTaskController.$inject = ['$location'];
    function ChooseForTaskController($location) {
        var vmd = this;
    }