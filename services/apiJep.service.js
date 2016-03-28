angular
 .module('jeopardy')
 .service('ApiJepService',function($http,$q) {
   var one = '/category?id=11521';
   var two = '/category?id=11548';
   var three = '/category?id=11566';
   var four = '/category?id=11560';
   var five = '/category?id=11582';
   var six = '/category?id=11531';
   var url = 'http://jservice.io/api'


   function getCategories(){
      var allUrls = [one, two, three, four, five, six]
      return $q.all(
        allUrls.map(function(data) {
          console.log('data from service',data);
          var defer = $q.defer();
          $http.get(url + data).then(function(element) {
            defer.resolve(element)
          })
          return defer.promise;
        })
      )
    }








   return {
     getCategories: getCategories

   };

 });
