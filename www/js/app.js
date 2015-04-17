angular.module('CaaMApp', ['ionic', 'CaaMApp.controllers', 'CaaMApp.services'])
.run(function($ionicPlatform) {
  
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
 
})
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONFIGURACION
.config(['$ionicConfigProvider', function($ionicConfigProvider) 
{
       
 $ionicConfigProvider.navBar.alignTitle('center');
 $ionicConfigProvider.tabs.position('bottom'); 
 $ionicConfigProvider.tabs.style('standard');//striped and standard.
 $ionicConfigProvider.backButton.previousTitleText(false);
 $ionicConfigProvider.backButton.icon('ion-ios-arrow-thin-left');
 $ionicConfigProvider.backButton.text('')
}])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//ROUTES
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

.state('auth', {
    url: "/auth",
    abstract: true,
    templateUrl: "templates/auth.html"
})

.state('auth.signin', {
    url: '/signin?card',
    views: {
        'auth-signin': {
            templateUrl: 'templates/auth-signin.html',
            controller: 'SignInCtrl'
        }
    }
})

.state('auth.forgot-password', {
 url: '/forgot-password',
 views: {
  'auth-signin': {
   templateUrl: 'templates/auth-forgot-password.html',
   controller: 'ForgotPasswordCtrl'
  }
 }
})

.state('auth.signup', {
    url: '/signup',
    views: {
        'auth-signup': {
            templateUrl: 'templates/auth-signup.html',
            controller: 'SignUpCtrl'
        }
    }
})
.state('bucket', {
    url: "/bucket",
    abstract: true,
    templateUrl: "templates/bucket.html"
})

/*
.state('bucket.list', {
    url: '/list',
    views: {
        'bucket-list': {
            templateUrl: 'templates/bucket-list.html',
            controller: 'myListCtrl'
        }
    }
})
.state('bucket.completed', {
    url: '/completed',
    views: {
        'bucket-completed': {
            templateUrl: 'templates/bucket-completed.html',
            controller: 'completedCtrl'
        }
    }
})

.state('snd', {
 url : '/snd', 
 templateUrl : 'templates/snd-abstract.html',
 abstract : true,
 controller : 'SndController'
 })
*/

.state('bucket.emp_afi', {
  url: "/emp_afi",
  views: {
    'bucket-emp_afi': {
      templateUrl: "templates/emp_afi.html"
      //controller: 'emp_afi_Ctrl'
      
    }
  }
 })

 .state('bucket.emp_afi_fact', {
  url: "/emp_afi_fact/:empresasId",
  views: {
   'bucket-emp_afi': {
    templateUrl: "templates/emp_afi_fact.html"
    //controller:'emp_afi_fact_Ctrl'
   }
  }
 }) 

$urlRouterProvider.otherwise('/auth/signin');
})

.controller('MainCtrl',     function($scope, $ionicSideMenuDelegate) { })