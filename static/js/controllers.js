app.controller('index.ctrl', ['$scope','$http','indexListSev',function ($scope,$http,indexListSev) {
    indexListSev.getIndex()
        .then(function (res) {
            $scope.indexList = res.data;
            console.log(res.data)
        });
}]).controller('list.ctrl', ['$scope','productListSev', '$http',function ($scope,productListSev,$http) {
    $http.get('/classify')
        .then(function (res) {
            $scope.classify = res.data;
            console.log(res.data)
        })
    productListSev.getList()
        .then(function (res) {
            $scope.productList = res.data;
            console.log(res.data)
        });
}]).controller('detail.ctrl',['$scope','$stateParams','$http','detailSev', function ($scope,$stateParams,$http,detailSev) {
    var id = $stateParams.id;
    console.log(id)
    detailSev.getproduct(id)
        .then(function(res){
            $scope.productInfo = res.data;
            console.log(res.data)
        })
}]).controller('design.ctrl',['$scope',function ($scope) {

}]).controller('mine.ctrl',['$scope','getSess','$location','logout',function ($scope,getSess,$location,logout) {
    getSess.useSession()
        .then(function(res){
            console.log(res.data)
            if(res.data.status){
                $scope.username = res.data.info;
                $scope.btn = res.data.msg;
            }else{
                $location.path("/login")
            }
        });
    $scope.logout = function () {
        logout.logout()
            .then(function (res) {
                console.log(res);
                $location.path("/index")
            })
    }

}]).controller('login.ctrl',['$scope','userlogin','$location','$state',function ($scope,userlogin,$location,$state) {
	$scope.login = function(){
		userlogin.login($scope.user)
			.then(function(res){
                if(res.data.status){
                    $location.path("/mine")
                }else{
                    Materialize.toast(res.data.msg, 1000, '' ,function(){
                        $state.go("login")
                    })
                }
			})
	}
}]).controller('register.ctrl',['$scope','userregister','$location','$state',function ($scope,userregister,$location,$state) {
	$scope.register = function(){
		userregister.register($scope.user)
			.then(function(res){
				console.log(res)
                if(res.data.status){
                    Materialize.toast(res.data.msg, 1000, '' ,function(){
                        $state.go("login")
                    })
                }else{
                    Materialize.toast(res.data.msg, 1000, '' , function(){
                        $state.go("register")
                    })
                }
			})
	}
}]);

app.directive('myLunbo',function () {
    return{
        restrict:'E',
        templateUrl:'./templates/lunbotu.html',
        replace:false,
        //controller:detail.ctrl,
        link:function (scope,iEle,iAtttr) {
            $(function(){
                $('.carousel.carousel-slider').carousel({full_width: true});
            })
        },
        scope: {
            slidelist:'='
        }
    }
})
