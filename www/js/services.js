angular.module('CaaMApp.services', [])
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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

$rootScope.logout = function () {
    $rootScope.setToken("");
    $window.location.href = '#/auth/signin';
};

$rootScope.notify =function(text){
    $rootScope.show(text);
    $window.setTimeout(function () {
      $rootScope.hide();
    }, 1999);
};

$rootScope.doRefresh = function (tab) {
    if(tab == 1)
        $rootScope.$broadcast('fetchAll');
    else
        $rootScope.$broadcast('fetchCompleted');
    
    $rootScope.$broadcast('scroll.refreshComplete');
};

$rootScope.setToken = function (token) {
    return $window.localStorage.token = token;
}

$rootScope.getToken = function () {
    return $window.localStorage.token;
}

$rootScope.isSessionActive = function () {
    return $window.localStorage.token ? true : false;
}

return {
    signin: function (form) {
        return $http.post(base+'/api/v1/bucketList/auth/login', form);
    },
    signup: function (form) {
        return $http.post(base+'/api/v1/bucketList/auth/register', form);
    },
    getAll: function (email) {
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
}
});
