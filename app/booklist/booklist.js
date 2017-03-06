'use strict';

angular.module('myApp.booklist', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('/booklist', {
    templateUrl: 'booklist/booklist.html',
    controller: 'BooklistCtrl'
  });
}])

.controller('BooklistCtrl', ['$scope','$rootScope', 'MetaService', '$http', '$location','USERSERVICE', function($scope, $rootScope, MetaService,$http,$location,USERSERVICE) {
	// Configure Meta Tags and Title
	$rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Books List | Book Inventory","desc","");

	 $rootScope.UserData = USERSERVICE.getUser();
    console.log(typeof $rootScope.UserData.userName);
  	if($rootScope.UserData.userName == undefined){
  		$location.path('/login');
  	}
	
	 var startTime = new Date().getTime();
	          $http.get(SERVERAPI+ 'api/book').then( 
	          function(result) {
	            if (result.data.status && result.data.data.length > 0) {
	            	$rootScope.data=result.data.data;
                } else {
                	alert('No Books Found');
                }
	          },function(error) {
	              var respTime = new Date().getTime() - startTime;
	              if(respTime >= TIMEOUT){
	                  alert('Server is busy, please try again.');
	              }else{
	                alert('No Books Found');
	              }
	          });

   
}]);