//import * as five from johnny-five;
    app.controller('arduinoController', 
    ['$http', '$location', '$scope', '$routeParams', '$sce',
    function($http, $location, $scope, $routeParams, $sce) {
           
    $scope.runCode = function(){
        var url = baseUrl + "arduino/run";
        
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
            $scope.arduino = response;
        }).error(function(response){
            alert('This is embarassing');
        });
        
    };
    $scope.exitCode = function(){
        var url = baseUrl + "arduino/exit";
        
        $http({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            url: url,
            dataType: 'json',
            data: $.param(true),
           
        
        }).success(function(response){
            console.log(response);
            $scope.arduino = response;
        }).error(function(response){
            alert('This is embarassing');
        });
        
    };
    // angular.extend($scope, {
    //     newCourse: {},
    //     errorDiv: false,
    //     errorMessages: []
    // });

    // angular.extend($scope, {
    //     runCode: function(ard_code){
    //         console.log(ard_code);
    //             var data = {
    //                 code: $scope.code
    //             }
    //         console.log(data);
    //             codeServices.runCode(data).success(function(response){
    //                 $scope.arduino = response;
    //             });
    //     }
    // });
    }]);
    