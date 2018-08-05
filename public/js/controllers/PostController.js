app.controller('PostController',function($scope,$http){
   $http.get("posts")
       .success(function(response){
        $scope.suppliers = response;
    });
});