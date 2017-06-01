var app = angular.module('myapp', ['ui.router']);
app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix("");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views:{
                    "mainView":{
                        templateUrl: './templates/index.tpl.html',
                        controller: 'index.ctrl'
                    }
                }
            })
            .state('design', {
                url: '/design',
                views:{
                    "mainView":{
                        templateUrl: './templates/design.tpl.html',
                        controller: 'design.ctrl'
                    }
                }
            })
            .state('list', {
                url: '/list',
                views:{
                    "mainView":{
                        templateUrl: './templates/list.tpl.html',
                        controller: 'list.ctrl'
                    }
                }
            })
            .state('detail',{
                url: '/detail/:id',
                views:{
                    "mainView":{
                        templateUrl: './templates/detail.tpl.html',
                        controller: 'detail.ctrl'
                    }
                }
            })
            .state('mine', {
                url: '/mine',
                views:{
                    "mainView":{
                        templateUrl: './templates/mine.tpl.html',
                        controller: 'mine.ctrl'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views:{
                    "mainView":{
                        templateUrl: './templates/login.tpl.html',
                        controller: 'login.ctrl'
                    }
                }
            })
            .state('register', {
                url: '/register',
                views:{
                    "mainView":{
                        templateUrl: './templates/register.tpl.html',
                        controller: 'register.ctrl'
                    }
                }
            })
    }]);
app.run([function(){
    console.info("项目启动...")
}])