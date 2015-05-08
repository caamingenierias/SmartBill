angular.module('CaaMApp.controllers', ['CaaMApp.services'])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES DE USUARIOS
.controller('SignInCtrl', function ($rootScope, $scope, API, $window, $stateParams, $ionicViewSwitcher, $ionicNavBarDelegate) {
    // if the user is already logged in, take him to his bucketlist
<<<<<<< HEAD
    if ($rootScope.isSessionActive()) 
    {
        $window.location.href = ('#/menu/tab/emp_afi');
=======
    if ($rootScope.isSessionActive()) {
        $window.location.href = ('#/bucket/emp_afi');
>>>>>>> origin/master
    }

    $scope.user = {
        email: "",
        password: ""
    };

<<<<<<< HEAD
    $scope.validateUser = function () 
    {
        var email = this.user.email;
        var password = this.user.password;
        
=======
    $scope.validateUser = function () {
        var email = this.user.email;
        var password = this.user.password;
>>>>>>> origin/master
        if(!email || !password) {
            //alert('Please enter valid credentials');
        	$rootScope.notify("Please enter valid credentials");
        	return false;
        }
<<<<<<< HEAD
        
        $rootScope.show('Please wait.. Authenticating');
        /*
=======
        $rootScope.show('Please wait.. Authenticating');
>>>>>>> origin/master
        API.signin({
            email: email,
            password: password
        }).success(function (data) {
<<<<<<< HEAD
        */   
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/menu/tab/emp_afi');
        /*   
=======
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/bucket/emp_afi');
>>>>>>> origin/master
        }).error(function (error) {
            $rootScope.hide();
            $rootScope.notify("Invalid Username or password");
        });
<<<<<<< HEAD
        */
=======
>>>>>>> origin/master
    }

    $scope.showCard = false;
    if($stateParams.card) 
    {
     $scope.showCard = true;
    }  

<<<<<<< HEAD
    $scope.forgotPassword = function (){        
    $ionicViewSwitcher.nextDirection('forward');
    //$state.go('auth.forgot-password');
    $window.location.href = ('#/forgot-password');
    $ionicNavBarDelegate.showBackButton(true);
    };
    
    $scope.crearCuenta = function (){        
    $ionicViewSwitcher.nextDirection('forward');
    //$state.go('auth.forgot-password');
    $window.location.href = ('#/signup');
    $ionicNavBarDelegate.showBackButton(true);
    };
=======
    $scope.forgotPassword = function (){
    $ionicViewSwitcher.nextDirection('forward');
    //$state.go('auth.forgot-password');
    $window.location.href = ('#/auth/forgot-password');
    $ionicNavBarDelegate.showBackButton(true);
  };

>>>>>>> origin/master
})

.controller('ForgotPasswordCtrl', function($scope, $state, $ionicViewSwitcher, $ionicNavBarDelegate){
  $scope.resetPassword = function () {
    $ionicViewSwitcher.nextDirection('back');
<<<<<<< HEAD
     $state.go('signin', { card: true });
=======
     $state.go('auth.signin', { card: true });
>>>>>>> origin/master
   // $window.location.href = ('#/auth/signin');
    $ionicNavBarDelegate.showBackButton(false);
  };
})

<<<<<<< HEAD
.controller('SignUpCtrl', function($rootScope, $scope, API, $window) {
    $scope.user = 
    {
=======


.controller('SignUpCtrl', function ($rootScope, $scope, API, $window) {
    $scope.user = {
>>>>>>> origin/master
        email: "",
        password: "",
        name: ""
    };

    $scope.createUser = function () {
    	var email = this.user.email;
        var password = this.user.password;
        var uName = this.user.name;
        if(!email || !password || !uName) {
        	$rootScope.notify("Please enter valid data");
        	return false;
        }
        $rootScope.show('Please wait.. Registering');
<<<<<<< HEAD
        /*
=======
>>>>>>> origin/master
        API.signup({
            email: email,
            password: password,
            name: uName
        }).success(function (data) {
<<<<<<< HEAD
        */    
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/tab/fact-reciente');
        /*    
=======
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/bucket/fact-reciente');
>>>>>>> origin/master
        }).error(function (error) {
            $rootScope.hide();
        	if(error.error && error.error.code == 11000)
        	{
        		$rootScope.notify("A user with this email already exists");
        	}
        	else
        	{
        		$rootScope.notify("Oops something went wrong, Please try again!");
        	}
            
        });
<<<<<<< HEAD
        */
    }
})
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES DE MENU
.controller('MenuCtrl', function(API, $scope, $ionicSideMenuDelegate) 
{
 $scope.mainCtrl = {};
 $scope.leftButtons = 
 [{
   type: 'button-icon button-clear ion-navicon',
   tap: function(e) 
   {
    $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
   }
 }];

 $scope.mainCtrl.showFeature = false;
})
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES TABS
.controller('TabsContadorCtrl', function($scope) {
  $scope.data = {  badgeCount : 2  };
})



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES DE EMPRESAS 
.controller("emp_afi_Ctrl",['$scope', 'ServiceEmpresa', '$ionicScrollDelegate', function($scope, ServiceEmpresa, $ionicScrollDelegate){
   

 ServiceEmpresa.all().then(function(empresas)
 {
  $scope.empresas = empresas;
 });
/* 

 $scope.empresas = ServiceEmpresa.all();
*/
 $scope.clearSearch = function() {
  $scope.data.searchQuery = '';   };
  
 $scope.scrollBottom = function() {
  $ionicScrollDelegate.scrollBottom(true); };

 $scope.scrollTop = function() {
  $ionicScrollDelegate.scrollTop(true);  };

}])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES DE FACTURAS

.controller('emp_afi_fact_Ctrl', function($scope, $stateParams, ServiceEmpresa) 
{
  $scope.empresa =  ServiceEmpresa.get($stateParams.empresasId);
})


/*

  .controller('DownloadsCtrl', function($scope, $ionicPlatform, ExampleService) 
  {

   $scope.downloads = ExampleService.allDownloads();
 
   $scope.$on('download-progress', function(event, args) {
     $scope.downloads.forEach(function(d) {
       if (d.num == args.podcast.num) {
         angular.copy(args.podcast, d);
       }
     });
   });

   })
   */

























/*
=======
    }
})

>>>>>>> origin/master
.controller('myListCtrl', function ($rootScope, $scope, API, $timeout, $ionicModal, $window) {
    $rootScope.$on('fetchAll', function(){
            API.getAll($rootScope.getToken()).success(function (data, status, headers, config) {
            $rootScope.show("Please wait... Processing");
            $scope.list = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].isCompleted == false) {
                    $scope.list.push(data[i]);
                }
            };
            if($scope.list.length == 0)
            {
                $scope.noData = true;
            }
            else
            {
                $scope.noData = false;
            }

            $ionicModal.fromTemplateUrl('templates/newItem.html', function (modal) {
                $scope.newTemplate = modal;
            });

            $scope.newTask = function () {
                $scope.newTemplate.show();
            };
            $rootScope.hide();
        }).error(function (data, status, headers, config) {
            $rootScope.hide();
            $rootScope.notify("Oops something went wrong!! Please try again later");
        });
    });

    $rootScope.$broadcast('fetchAll');

    $scope.markCompleted = function (id) {
        $rootScope.show("Please wait... Updating List");
        API.putItem(id, {
            isCompleted: true
        }, $rootScope.getToken())
            .success(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.doRefresh(1);
            }).error(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.notify("Oops something went wrong!! Please try again later");
            });
    };



    $scope.deleteItem = function (id) {
        $rootScope.show("Please wait... Deleting from List");
        API.deleteItem(id, $rootScope.getToken())
            .success(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.doRefresh(1);
            }).error(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.notify("Oops something went wrong!! Please try again later");
            });
    };

})

.controller('completedCtrl', function ($rootScope,$scope, API, $window) {
        $rootScope.$on('fetchCompleted', function () {
            API.getAll($rootScope.getToken()).success(function (data, status, headers, config) {
                $scope.list = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].isCompleted == true) {
                        $scope.list.push(data[i]);
                    }
                };
                if(data.length > 0 & $scope.list.length == 0)
                {
                    $scope.incomplete = true;
                }
                else
                {
                    $scope.incomplete= false;
                }
                
                if(data.length == 0)
                {
                    $scope.noData = true;
                }
                else
                {
                    $scope.noData = false;
                }
            }).error(function (data, status, headers, config) {
                $rootScope.notify("Oops something went wrong!! Please try again later");
            });

        });
        
        $rootScope.$broadcast('fetchCompleted');
        $scope.deleteItem = function (id) {
            $rootScope.show("Please wait... Deleting from List");
            API.deleteItem(id, $rootScope.getToken())
                .success(function (data, status, headers, config) {
                    $rootScope.hide();
                    $rootScope.doRefresh(2);
                }).error(function (data, status, headers, config) {
                    $rootScope.hide();
                    $rootScope.notify("Oops something went wrong!! Please try again later");
                });
        };
    })

.controller('newCtrl', function ($rootScope, $scope, API, $window) {
        $scope.data = {
<<<<<<< HEAD
            item: ""
        };
=======
	        item: ""
	    };
>>>>>>> origin/master

        $scope.close = function () {
            $scope.modal.hide();
        };

        $scope.createNew = function () {
<<<<<<< HEAD
            var item = this.data.item;
            if (!item) return;
=======
			var item = this.data.item;
        	if (!item) return;
>>>>>>> origin/master
            $scope.modal.hide();
            $rootScope.show();
            
            $rootScope.show("Please wait... Creating new");

            var form = {
                item: item,
                isCompleted: false,
                user: $rootScope.getToken(),
                created: Date.now(),
                updated: Date.now()
            }

            API.saveItem(form, form.user)
                .success(function (data, status, headers, config) {
                    $rootScope.hide();
                    $rootScope.doRefresh(1);
                })
                .error(function (data, status, headers, config) {
                    $rootScope.hide();
                    $rootScope.notify("Oops something went wrong!! Please try again later");
                });
        };
    })
<<<<<<< HEAD
*/
=======

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES TABS
.controller('TabsContadorCtrl', function($scope) {
  $scope.data = {  badgeCount : 3  };
})

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//CONTROLES DE EMPRESAS Y FACTURAS
.controller('emp_afi_Ctrl', function($scope, EmpServiceFactura, $ionicScrollDelegate) {

 $scope.empresas = EmpServiceFactura.all();

 $scope.clearSearch = function() {
  $scope.data.searchQuery = '';   };
  
 $scope.scrollBottom = function() {
  $ionicScrollDelegate.scrollBottom(true); };

 $scope.scrollTop = function() {
  $ionicScrollDelegate.scrollTop(true);  };

})

.controller('emp_afi_fact_Ctrl', function($scope, $stateParams, EmpServiceFactura) {
 $scope.empresa =  EmpServiceFactura.get($stateParams.empresasId);
})

>>>>>>> origin/master
