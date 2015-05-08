<<<<<<< HEAD
angular.module('CaaMApp', ['ionic','ngCordova', 
// modules
'CaaMApp.controllers', 
'CaaMApp.services',
'CaaMApp.file.ctrl'
])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONSOLA
=======
angular.module('CaaMApp', ['ionic', 'CaaMApp.controllers', 'CaaMApp.services'])
>>>>>>> origin/master
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
 
<<<<<<< HEAD
})  
=======
})
>>>>>>> origin/master
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONFIGURACION
.config(['$ionicConfigProvider', function($ionicConfigProvider) 
{
<<<<<<< HEAD
=======
       
>>>>>>> origin/master
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
<<<<<<< HEAD

 $stateProvider
 
 .state('signin', {
      url: '/sign-in?card',
      templateUrl: 'templates/signin.html'
      //controller : 'RootPageController'
      
    })
 
 .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html',
      controller: 'ForgotPasswordCtrl'
 })
 
 .state('signup', {
  url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
 })

 .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html"
 })

 .state('menu.tabs', {
    url: "/tab",
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: "templates/tabs.html",
      }
   }
 })
 
 .state('menu.tabs.emp_afi', {
    url: "/emp_afi",
    views: {
      'tabs-emp_afi': {
        templateUrl: "templates/tabs_emp_afi.html",
        controller: 'emp_afi_Ctrl',  
        resolve: {
        allServiceEmpresa: function(ServiceEmpresa) {
          return ServiceEmpresa.all(); }
      }
    }
  }
})


  .state('opciones', {
      url: '/opcion',
      abstract: true,
      templateUrl: 'templates/opcion.html'
  })


  .state('opciones.home', {
      url: '/home',
      views: {
        'home-opcion': {
          templateUrl: 'templates/opcion_home.html',
          controller: 'HomeTabCtrl'
        }
      }
  })


  .state('opciones.about', {
      url: '/about',
      views: {
        'about-opcion': {
          templateUrl: 'templates/opcion_about.html'
        }
      }
  })


/*
  .state('menu.tabs.emp_afi_fact', {
   url: "/emp_afi_fact/:empresasId",
   views: {
    'tabs-emp_afi': {
    templateUrl: "templates/emp_afi_fact.html",
     controller: 'emp_afi_Ctrl',  
     resolve: 
     {
      allServiceFactura: function(ServiceFactura) 
      {
       return ServiceFactura.all(); 
      }
     } 
    }
   }
 }) 
*/

 /*
 .state('opciones.emp_afi_fact', {
   url: "/emp_afi_fact/:empresasId",
   views: {
    'prueba-opcion': {
    templateUrl: "templates/opciones_emp_afi_fact.html",
    controller: 'ServiceFactura'  
   }
  }
 }) 
*/ 

 .state('menu.tabs.emp_afi_fact', {
   url: "/emp_afi_fact/:empresasId",
   views: {
    'tabs-emp_afi': {
    templateUrl: "templates/emp_afi_fact.html",
    controller: 'ServiceFactura'  
   }
  }
 })

.state('menu.tabs.suscribir', {
    url: '/suscribir',
    views: {
      'tabs-suscribir': {
        templateUrl: "templates/tabs_suscribir.html"
      }
    }
 })

 .state('menu.tabs.reportes', {
    url: "/reportes",
    views: {
      'tabs-reportes': {
        templateUrl: "templates/tabs_reportes.html",
      }
    }
 })
   
 .state('menu.tabs.acerca', {
    url: "/acerca",
    views: {
      'tabs-acerca': {
        templateUrl: "templates/tabs_acerca.html",
      }
    }
 })
  
 .state('menu.tabs.configuracion', {
    url: "/configuracion",
    views: {
      'tabs-configuracion': {
        templateUrl: "templates/tabs_configuracion.html",
      }
    }
 })

 .state('file', {
  url: '/file',
  templateUrl: 'templates/file/file.html',
  controller: "FileCtrl"
 })
=======
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
>>>>>>> origin/master

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
<<<<<<< HEAD
=======

>>>>>>> origin/master
.state('snd', {
 url : '/snd', 
 templateUrl : 'templates/snd-abstract.html',
 abstract : true,
 controller : 'SndController'
 })
*/

<<<<<<< HEAD
//$urlRouterProvider.otherwise('/opcion/home');
 $urlRouterProvider.otherwise('/sign-in');
 //$urlRouterProvider.otherwise("/menu/tab/emp_afi");
})






.controller('HomeTabCtrl', function($scope) {
  
})

.controller('HomeCtrl', function($scope) {
  $scope.data = {
    badgeCount : 2
  };
  
})


.controller('AboutCtrl', function($scope) {
  $scope.data = {
    badgeCount : 3
  };
  
});
=======
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
>>>>>>> origin/master
