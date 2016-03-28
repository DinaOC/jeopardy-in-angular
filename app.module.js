var angular = require('angular');
var angularRoute = require('angular-route');

angular
 .module('jeopardy',['ngRoute'])
 .config(function($routeProvider) {
   $routeProvider
     .when('/',{
       templateUrl: "templates/index.html",
       controller: "HomeController"
     })
     .when('/question', {
       templateUrl: 'templates/question.html',
       controller: 'QuestionController'
     })
     .when('/404',{
       template: '<h1> Great! You messed up! </h1>',
       controller: 'HomeController'
     })
     .otherwise({
        redirectTo: '/404'
     })
 })

 require('./controllers/home.controller');
 require('./controllers/question.controller');
 require('./services/apiJep.service');
 require('./services/jep');
 require('./directives/tempDirective');
