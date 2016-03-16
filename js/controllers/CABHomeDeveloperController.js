use 'strict'

angular
        .module('app')
        .controller('CABHomeDeveloperController', CABHomeDeveloperController);

    CABHomeDeveloperController.$inject = ['$location'];
    function CABHomeDeveloperController($location) {
        var vmd = this;
    }