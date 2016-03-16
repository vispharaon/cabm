use 'strict'

angular
        .module('app')
        .controller('AnalyzeController', AnalyzeController);

    AnalyzeController.$inject = ['$location'];
    function AnalyzeController($location) {
        var vmd = this;
    }