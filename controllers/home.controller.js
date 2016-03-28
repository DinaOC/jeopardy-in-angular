
angular
 .module('jeopardy')
 .controller('HomeController', function($scope, ApiJepService) {
   $scope.categories = [];
   ApiJepService.getCategories()
   .then(function(allValues){



     $scope.categories = allValues.map(function(el){
       return el.data.title;
     });
     $scope.clues = allValues.map(function (el) {
     return el.data;
     });

  

})
})
