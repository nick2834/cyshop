/**
 * Created by Leslie on 2017/4/24.
 */

app.factory('productListSev', ['$http',function ($http) {
    return {
        getList: function () {
            return $http.post('/product/list');
        }
    }
}]);
app.factory('detailSev', ['$http',function ($http) {
    return {
        getproduct: function (id) {
            return $http.post('/product/getproduct/'+id);
        }
    }
}]);
//用户登录
app.factory('userlogin', ['$http',function ($http) {
    return {
        login: function (user) {
            return $http.post('/users/login', user);
            //return $http.post('/users/login', user,{headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}});
        }
    }
}]);
//用户注册
app.factory('userregister', ['$http',function ($http) {
    return {
        register:function(user){
        	return $http.post('/users/register',user);
        }
    }
}]);

//退出登录
app.factory('logout', ['$http',function ($http) {
    return {
        logout:function(){
            return $http.get('/users/logout');
        }
    }
}]);
//首页轮播
app.factory('indexListSev',['$http',function($http){
    return{
        getIndex:function(){
            return $http.post('/index')
        }
    }
}]);

app.factory('getSess', ['$http',function ($http) {
    return {
        useSession:function(){
            return $http.get('/users/mine');
        }
    }
}]);