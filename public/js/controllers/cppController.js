//import * as five from johnny-five;
app.controller('cppController', 
['$http', '$location', '$scope', '$routeParams', '$sce',
function($http, $location, $scope, $routeParams, $sce) {
       
$scope.runCode = function(){
    var url = baseUrl + "cpp/run";
    
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
        $scope.cpp = response;
    }).error(function(response){
        alert('This is embarassing');
    });
    
};
}]);
