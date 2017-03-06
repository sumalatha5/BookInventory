'use strict';

angular.module('myApp.footer', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/footer', {
    templateUrl: 'footer/footer.html',
    controller: 'FooterCtrl'
  });
}])

.controller('FooterCtrl', ['$scope','$rootScope', 'MetaService', function($scope, $rootScope, MetaService) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Footer | Book Inventory","desc","");
}]);