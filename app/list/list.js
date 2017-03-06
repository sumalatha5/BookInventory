'use strict';

angular.module('myApp.list', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/list', {
    templateUrl: 'list/list.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$scope','$rootScope', 'MetaService', function($scope, $rootScope, MetaService) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Books List | Book Inventory","desc","");


    $scope.data = $rootScope.searchData;
}]);