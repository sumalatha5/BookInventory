'use strict';

const SERVERAPI = "https://fierce-hollows-55761.herokuapp.com/";
const TIMEOUT = 15000;

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'metaservice',
  'myApp.index',
  'myApp.search',
  'myApp.login',
  'myApp.registration',
  'myApp.list',
  'myApp.header',
  'myApp.footer',
  'myApp.booklist',
  'myApp.version'
  
]).
config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider) {
  //$locationProvider.hashPrefix('!');

  //$urlRouterProvider.otherwise('/otherwise');
  $stateProvider

  .state('login', {
    url: '/login',
    views: {
      'content': {
        templateUrl:'login/login.html',
		controller:'LoginCtrl'
      }
    }
  })
  .state('registration', {
    url: '/registration',
    views: {
      'content': {
        templateUrl: 'registration/registration.html',
        controller: 'RegistrationCtrl'
      }
    }
  })
  .state('myapp', {
    views: {
      'header': {
        templateUrl:'header/header.html',
		controller:'HeaderCtrl'
      },
      'content': {
        /*template:'<div ui-view></div>'*/
      },
      'footer': {
        templateUrl:'footer/footer.html',
		controller:'FooterCtrl'
      }
    }
  })
  .state('myapp.index', {
    url: '/index',
    templateUrl:'index/index.html',
	controller:'IndexCtrl'
 
  })
  .state('myapp.search', {
    url: '/search',
    templateUrl:'search/search.html',
	controller:'SearchCtrl'
  })
  .state('myapp.list', {
    url: '/list',
    templateUrl:'list/list.html',
	controller:'ListCtrl'
  })

  .state('myapp.booklist', {
    url: '/booklist',
    templateUrl:'booklist/booklist.html',
	controller:'BooklistCtrl'
  })

 

}])
.run([ '$rootScope', '$location', '$anchorScroll','$state', function( $rootScope, $location, $anchorScroll, $state) {
  $rootScope.$on("$locationChangeSuccess", function(){
    $anchorScroll();
  });
  $state.go('login');
}])
;
