angular.module('CaaMApp.services', [])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
<<<<<<< HEAD
//SERVICIO DE USUARIOS 
.factory('API', function($http, $rootScope, $ionicLoading, $window) {
var base = "http://bucketlistapplication.herokuapp.com";

=======
.factory('EmpServiceFactura', function () {
 var empresas = [];
 empresas = [
    { id: '0',  usuario: 'caamingenierias@hotmail.com', nombre: 'AlKosto', imagen: '../img/empresas/alkosto.gif', saldo: '290800', facturas : '0' },
    { id: '1',  usuario: 'caamingenierias@hotmail.com', nombre: 'Claro', imagen: '../img/empresas/claro.jpg', saldo: '560000', facturas : '1' },
    { id: '2',  usuario: 'caamingenierias@hotmail.com', nombre: 'Disel', imagen: '../img/empresas/disel.jpg', saldo: '230800', facturas : '0' },
    { id: '3',  usuario: 'caamingenierias@hotmail.com', nombre: 'Exito', imagen: '../img/empresas/exito1.jpg', saldo: '450000', facturas : '2' },
    { id: '4',  usuario: 'caamingenierias@hotmail.com', nombre: 'Farabella', imagen: '../img/empresas/farabella.jpg', saldo: '91800', facturas : '0' },
    { id: '5',  usuario: 'caamingenierias@hotmail.com', nombre: 'Farma Todo', imagen: '../img/empresas/farma todo1.jpg', saldo: '23000', facturas : '0' },
    { id: '6',  usuario: 'caamingenierias@hotmail.com', nombre: 'Hard Rock', imagen: '../img/empresas/hard rock.jpg', saldo: '55000', facturas : '0' },
    { id: '7',  usuario: 'caamingenierias@hotmail.com', nombre: 'HomeCenter', imagen: '../img/empresas/home center1.jpg', saldo: '4560000', facturas : '0' },    
    { id: '8',  usuario: 'caamingenierias@hotmail.com', nombre: 'Juan Valdez', imagen: '../img/empresas/juan valdez1.jpg', saldo: '96000', facturas : '0' },
    { id: '9',  usuario: 'caamingenierias@hotmail.com', nombre: 'Jumbo', imagen: '../img/empresas/jumbo.jpg', saldo: '657700', facturas : '0' },
    { id: '10', usuario: 'caamingenierias@hotmail.com', nombre: 'La Rebaja', imagen: '../img/empresas/la rebaja.jpg', saldo: '45000', facturas : '0' },
    { id: '11', usuario: 'caamingenierias@hotmail.com', nombre: 'Mega Tienda', imagen: '../img/empresas/mega tienda1.jpg', saldo: '3400000', facturas : '0' },
    { id: '12', usuario: 'caamingenierias@hotmail.com', nombre: 'Magdonalds', imagen: '../img/empresas/mgdonalds.png', saldo: '640000', facturas : '0' },
    { id: '13', usuario: 'caamingenierias@hotmail.com', nombre: 'Movistar', imagen: '../img/empresas/movistar.png', saldo: '450789', facturas : '0' },
    { id: '14', usuario: 'caamingenierias@hotmail.com', nombre: 'Presto', imagen: '../img/empresas/presto1.jpg', saldo: '67543', facturas : '0' },
    { id: '15', usuario: 'caamingenierias@hotmail.com', nombre: 'Subway', imagen: '../img/empresas/subway1.jpg', saldo: '210000', facturas : '0' },    
    { id: '16', usuario: 'caamingenierias@hotmail.com', nombre: 'Tigo', imagen: '../img/empresas/tigo.jpg', saldo: '70000', facturas : '0' },    
 ];

 return {
  all: function () {
   return empresas;
  },
 
  get: function (empresaId) {
   return empresas[empresaId];
  }
 };
})








/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
.factory('API', function ($rootScope, $http, $ionicLoading, $window) {
var base = "http://bucketlistapplication.herokuapp.com";
>>>>>>> origin/master
$rootScope.show = function (text) {
    $rootScope.loading = $ionicLoading.show({
        content: text ? text : 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
};

$rootScope.hide = function () {
    $ionicLoading.hide();
};

<<<<<<< HEAD

$rootScope.notify =function(text){
    $rootScope.show(text);
    $window.setTimeout(function () {
      $rootScope.hide();
    }, 1999);
};

$rootScope.logout = function () {
    $rootScope.setToken("");
    $window.location.href = '#/signin';
=======
$rootScope.logout = function () {
    $rootScope.setToken("");
    $window.location.href = '#/auth/signin';
>>>>>>> origin/master
};

$rootScope.notify =function(text){
    $rootScope.show(text);
    $window.setTimeout(function () {
      $rootScope.hide();
    }, 1999);
};

<<<<<<< HEAD
=======
$rootScope.doRefresh = function (tab) {
    if(tab == 1)
        $rootScope.$broadcast('fetchAll');
    else
        $rootScope.$broadcast('fetchCompleted');
    
    $rootScope.$broadcast('scroll.refreshComplete');
};

>>>>>>> origin/master
$rootScope.setToken = function (token) {
    return $window.localStorage.token = token;
}

$rootScope.getToken = function () {
    return $window.localStorage.token;
}

$rootScope.isSessionActive = function () {
    return $window.localStorage.token ? true : false;
}

<<<<<<< HEAD
$rootScope.doRefresh = function (tab) {
    if(tab == 1)
        $rootScope.$broadcast('fetchAll');
    else
        $rootScope.$broadcast('fetchCompleted');
    
    $rootScope.$broadcast('scroll.refreshComplete');
};

=======
>>>>>>> origin/master
return {
    signin: function (form) {
        return $http.post(base+'/api/v1/bucketList/auth/login', form);
    },
    signup: function (form) {
        return $http.post(base+'/api/v1/bucketList/auth/register', form);
    },
    getAll: function (email) {
<<<<<<< HEAD
        return $http.get(base+'/api/v1/bucketList/data/list', 
        {
           method: 'GET',
           params: 
           {
            token: email
           }
        });
    },
    getOne: function (id, email) {
        return $http.get(base+'/api/v1/bucketList/data/list/' + id, 
        {
           method: 'GET',
           params: 
           {
            token: email
           }
        });
    }
    /*
=======
        return $http.get(base+'/api/v1/bucketList/data/list', {
            method: 'GET',
            params: {
                token: email
            }
        });
    },
    getOne: function (id, email) {
        return $http.get(base+'/api/v1/bucketList/data/list/' + id, {
            method: 'GET',
            params: {
                token: email
            }
        });
    },
>>>>>>> origin/master
    saveItem: function (form, email) {
        return $http.post(base+'/api/v1/bucketList/data/item', form, {
            method: 'POST',
            params: {
                token: email
            }
        });
    },
    putItem: function (id, form, email) {
        return $http.put(base+'/api/v1/bucketList/data/item/' + id, form, {
            method: 'PUT',
            params: {
                token: email
            }
        });
    },
    deleteItem: function (id, email) {
        return $http.delete(base+'/api/v1/bucketList/data/item/' + id, {
            method: 'DELETE',
            params: {
                token: email
            }
        });
    }
<<<<<<< HEAD
    */
    }

})
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//SERVICIO DE EMPRESAS
.factory('ServiceEmpresa',function($http)
{
 var empresas  = [];
 return {
    all: function()
    {
      return $http.get('json/empresas.json').then(function(response)
      {
        empresas = response.data;
        return empresas;
      });
    },
    get: function(empresaId) 
    {
      return empresas[empresaId];
    }
  }
})
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//SERVICIO DE FACTURAS
.controller("ServiceFactura", ['$scope','$http','$rootScope','$ionicLoading', '$window','$log','$cordovaFile','$timeout','$cordovaFileTransfer','$cordovaFileOpener2', 
                       function($scope , $http , $rootScope , $ionicLoading ,  $window , $log , $cordovaFile , $timeout , $cordovaFileTransfer , $cordovaFileOpener2)
{    
 var facturas  = [];   

 $http.get('json/facturas.json').success (function(data)
 {
    $scope.facturas = data;
 }); 

 var verifica_file_creado = 0;
 var permiso_abrir_file   = 0;
  
 $scope.leerfactura = function(factura,$emp_sigla) 
 {

  var directorio_api = 'smartbill';
  var fact           =  $emp_sigla+'-'+ factura.num_fact +'.pdf';
  var ruta_api       =  directorio_api+'/'+fact;

  //CREA DIRECTORIO FACTURAS 
  $scope.createDirectory(directorio_api);
  //$scope.createDirectory(directorio_api+'/facturas');

  //VERIFICAMOS SI LA FACTURA ESTA DESCARGADA
  $scope.checkFile(ruta_api);

  /*
  //DESCARGA LA FACTURA DEL SERVIDOR AL DISPOSITIVO 
  if ( verifica_file_creado == 0)
  {
   $scope.downloadFile(ruta_api);
  }
  */ 
  

 
 };

 
 ////////////////////////////////////////////////////////////////////////
  $scope.createDirectory = function (Directory_temp) {
      document.addEventListener('deviceready', function () {
        // path, dirName, replace?
        $cordovaFile.createDir(cordova.file.externalRootDirectory, Directory_temp, true).then(function (success) {
        //$scope.createDirectoryResult = 'success ' + JSON.stringify(success);
        //alert( 'success ' + JSON.stringify(success) );
        }, function (error) {
          $scope.createDirectoryResult = 'error ' + JSON.stringify(error);
          alert( 'ERROR AL CREAR DIRECTORIOS, Contacte al adiministrador del API' + JSON.stringify(error) );
        });
      });
    };
    $scope.checkFile = function (checkFile_temp) {
      document.addEventListener('deviceready', function () 
      {
        $cordovaFile.checkFile(cordova.file.externalRootDirectory, checkFile_temp).then(function (success) 
        {

         // ABRE EL ARCHIVO DESDE EL DISPOSITIVO
         $scope.packageId = cordova.file.externalRootDirectory + checkFile_temp;
         $scope.type = 'application/pdf';
         $scope.logs = '';
         $scope.openFile();

         //$scope.checkFileResult = 'success ' + JSON.stringify(success);
         //alert('FACTURA ESTA DESCARGADA'+checkFile_temp);
        }, function (error) {
          //$scope.checkFileResult = 'error ' + JSON.stringify(error);
          //alert('FACTURA NO SE ENCUENTRA DESCARGADA' + JSON.stringify(error) );
          //verifica_file_creado=0;
          //permiso_abrir_file  =0;
          $scope.downloadFile(checkFile_temp);
        });
      });
  
    };
 ////////////////////////////////////////////////////////////////////////
/*
$scope.downloadFile = function(checkFile_temp) 
{

 $ionicLoading.show({template: 'Loading...'});
 $cordovaFile.downloadFile("http://www.education.gov.yk.ca/pdf/pdf-test.pdf", "file:///storage/sdcard0/pdf/pdf-test.pdf", true,{}).then(function(result) 
 {
  // Success!
  $cordovaDialogs.alert('Wow!');
  $ionicLoading.hide();
 }, function(err) 
 {
  // An error occured. Show a message to the user
  $cordovaDialogs.alert('Error');
  //$ionicLoading.hide();
 });

};
*/

   $scope.downloadFile = function (checkFile_temp) {
      document.addEventListener('deviceready', function () {

        //$ionicLoading.show({template: 'Loading...'});
         
         $ionicLoading.show({
            content: 'Showing Loading Indicator!',
            animation: 'fade-in',
            showBackdrop: false,
            maxWidth: 200,
            showDelay: 500
        }); 
        
   
        
        var url = "http://www.education.gov.yk.ca/pdf/pdf-test.pdf";
        var fileDir = cordova.file.externalRootDirectory + checkFile_temp;
        var download = $cordovaFileTransfer.download(url, fileDir).then(function (success) 
        {
          $ionicLoading.hide();
          //$timeout(function () { $scope.downloadProgress = 100 }, 1000);

          // ABRE EL ARCHIVO DESDE EL DISPOSITIVO
          $scope.packageId = cordova.file.externalRootDirectory + checkFile_temp;
          $scope.type = 'application/pdf';
          $scope.logs = '';
          $scope.openFile();
   
          //console.log("Descarga exitosa " + JSON.stringify(success));
          //alert("Descargando factura " + JSON.stringify(success));

        }, function (error) {
           //console.log("ERROR de descarga" + JSON.stringify(error));
           $ionicLoading.hide();
           alert("COMPRUEBA TU CONEXION Y REINTENTALO NUEVAMENTE" );


        }, function (progress) {

           /* 
           $timeout(function()
           {
            //$scope.downloadProgress = (progress.loaded / progress.total) * 100;
            $scope.loadingIndicator.hide();
           },1000);   
           */

        });

        /* 
        if ($scope.downloadProgress > 0.1) {
          download.abort();
        }
        */
      })
    

    };
 ////////////////////////////////////////////////////////////////////////
 
    $scope.openFile = function() 
    {
      $cordovaFileOpener2.open($scope.packageId, $scope.type).then(
        function()
        {
         //$scope.logs = 'Success';
        },
        function(error) {
         alert('SMARTBILL : NO ENCONTRO NINGUNA APLICACION ASOCIADA PARA ABRIR SU FACTURA EN FORMATO [ PDF ]');
        }
      );
    };
 /**/
 ////////////////////////////////////////////////////////////////////////
$rootScope.show = function (text) {
    $rootScope.loading = $ionicLoading.show({
        content: text ? text : 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
};

$rootScope.hide = function () {
    $ionicLoading.hide();
};


$rootScope.notify =function(text){
    $rootScope.show(text);
    $window.setTimeout(function () {
      $rootScope.hide();
    }, 1999);
};

 /*
 $scope.uploadFile = function() 
 {
  var url = "http://your_ip_address/uploads/upload.php";
  //target path may be local or url
  var targetPath = "http://your_ip_address/images/my.jpg";
  var filename = targetPath.split("/").pop();
  var options = 
  {
   fileKey: "file",
   fileName: filename,
   chunkedMode: false,
   mimeType: "image/jpg"
  };
  
  $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) 
  {
    console.log("SUCCESS: " + JSON.stringify(result.response));
    alert("success");
    alert(JSON.stringify(result.response));
  }, function(err) 
  {
    console.log("ERROR: " + JSON.stringify(err));
    alert(JSON.stringify(err));
  }, function (progress) 
  {
   // constant progress updates
   $timeout(function () 
   {
     $scope.downloadProgress = (progress.loaded / progress.total) * 100;
   })
  });
 };
 */
 ////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////



 
 $scope.data = {
  showDelete: false
 };
  
  $scope.edit = function(factura) {
    alert('Edit Factura: ' + factura.id);
  };

  $scope.share = function(factura) {
    alert('Share Factura: ' + factura.id);
  };
  
  $scope.moveItem = function(factura, fromIndex, toIndex) {
    $scope.facturas.splice(fromIndex, 1);
    $scope.facturas.splice(toIndex, 0, factura);
  };
  
  $scope.onItemDelete = function(factura) {
    $scope.facturas.splice($scope.facturas.indexOf(factura), 1);
  };


}])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



=======
}
});
>>>>>>> origin/master
