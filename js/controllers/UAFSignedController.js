use 'strict'

angular
        .module('app')
        .controller('UAFSignedController', UAFSignedController);

    UAFSignedController.$inject = ['$location'];
    function UAFSignedController($location) {
        var vmd = this;
    }