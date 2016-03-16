use 'strict'

angular
        .module('app')
        .controller('DevelopmentController', DevelopmentController);

    DevelopmentController.$inject = ['$location'];
    function DevelopmentController($location) {
        var vmd = this;
    }