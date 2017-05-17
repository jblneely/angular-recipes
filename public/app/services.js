angular.module('TennisballServices', ['ngResource'])

.factory('Auth', ['$window', function($window) {
        return {
            saveToken: function(token) {
                $window.localStorage['secrettennisballs-token'] = token;
            },
            getToken: function() {
                return $window.localStorage['secrettennisballs-token'];
            },
            removeToken: function() {
                $window.localStorage.removeItem('secrettennisballs-token')
            },
            isLoggedIn: function() {
                return this.getToken() ? true : false;
            },
            currentUser: function() {
                if (this.isLoggedIn()) {
                    var token = this.getToken();

                    try { //Try executing some vulnerable code that could potentially throw an error
                        var payload = JSON.parse($window.atob(token.split('.')[1]));
                        console.log('payload fetched and decoded');
                        return payload;
                    } catch (err) {
                        //gracefully handle the error
                        console.log('A bad one happened', err);
                        return false;

                    }
                }
                return false;
            }
        }
    }]).factory('AuthInterceptor', ['Auth', function(Auth) {
        return {
            request: function(config) {
                var token = Auth.getToken();
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            }
        }
    }])
    .factory('Alerts', [function() {
        var alerts = [];

        return {
            get: function() {
                return alerts;
            },
            add: function(type, msg) {
                alerts.push({ type: type, msg: msg });
            },
            clear: function() {
                alerts = [];
            }
        }
    }])
