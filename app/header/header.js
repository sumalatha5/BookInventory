'use strict';

angular.module('myApp.header', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/header', {
    templateUrl: 'header/header.html',
    controller: 'HeaderCtrl'
  });
}])

.run([ '$rootScope', '$location', '$anchorScroll', 'USERSERVICE', function( $rootScope, $location, $anchorScroll, USERSERVICE) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });

}])

.controller('HeaderCtrl', ['$scope','$rootScope', 'MetaService','USERSERVICE','$location', function($scope, $rootScope, MetaService, USERSERVICE, $location) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Header | Book Inventory","desc","");
	
	$rootScope.UserData = USERSERVICE.getUser();
    console.log(typeof $rootScope.UserData.userName);
  	if($rootScope.UserData.userName == undefined){
  		$location.path('/login');
  	}

	
	
	 $scope.logout = function(){
      USERSERVICE.dropUser();
      $rootScope.UserData = USERSERVICE.getUser();
      $location.path('/login');
    };
}]);