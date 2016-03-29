
angular
 .module('jeopardy')
 .controller('HomeController', function($scope, ApiJepService) {
   $scope.categories = [];
   ApiJepService.getCategories()
   .then(function(allValues){


     console.log(allValues)
     $scope.categories = allValues



    });
})
