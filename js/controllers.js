var sampleControllers = angular.module('sampleControllers', []);

var title = "My Sample Application";

sampleControllers.controller('homeController', ['$scope', '$http', '$window', function($scope, $http, $window) {

	$scope.sorting = 'name';
	
	$scope.title = title;


	var headerTitles = ['Community', 'Game of Thrones', 'The Walking Dead'];
	var headerLinks = ['18347', '1399', '1402'];
	var headerLevel1Texts = ['Cool. <br>Cool, cool, cool.', 'The North<br> remembers.', "This is life <br> now."];

}]);