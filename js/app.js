// var demoApp = angular.module('demoApp', ['demoControllers']);

var sampleApp = angular.module('sampleApp', ['ngRoute', 'sampleControllers']);

sampleApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);