const myApp = angular.module('myApp',[]);
myApp.controller('appControl',['$scope','$http',
    function($scope,$http) {
        console.log("Hello world from controller.");
    }]);