use 'strict'

angular
        .module('app')
        .controller('CloseCABController', CloseCABController);

    CloseCABController.$inject = ['$location'];
    function CloseCABController($location) {
        var vmd = this;
    }