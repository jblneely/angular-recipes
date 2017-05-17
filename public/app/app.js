var app = angular.module('TennisballApp', ['ui.router', 'TennisballCtrls']);

app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/404');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/views/tennisballs.html',
                    controller: 'HomeCtrl'
                })
                .state('newTennisball', {
                    url: '/tennisballs/new',
                    templateUrl: 'app/views/newTennisball.html',
                    controller: 'NewCtrl'
                })
                .state('tennisballShow', {
                    url: '/tennisballs/:id',
                    templateUrl: 'app/views/showTennisball.html',
                    controller: 'ShowCtrl'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'app/views/userSignup.html',
                    controller: 'SignupCtrl'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/views/userLogin.html',
                    controller: 'LoginCtrl'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/views/404.html'
                });

            $locationProvider.html5Mode(true);
        }
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);
