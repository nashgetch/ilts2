//import * as five from johnny-five;
app.controller('javaController', 
['$http', '$location', '$scope', '$routeParams', '$sce',
function($http, $location, $scope, $routeParams, $sce) {
       
$scope.runCode = function(){
    var url = baseUrl + "java/run";
    
    $http({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        url: url,
        dataType: 'json',
        data: $.param({code: $scope.code}),
       
    
    }).success(function(response){
        console.log(response);
        $scope.java = response;
    }).error(function(response){
        alert('This is embarassing');
    });
    
};
}]);
