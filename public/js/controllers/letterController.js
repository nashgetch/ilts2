app.controller('letterController', ['$scope', '$location', 'letterServices', function($scope, $location, letterServices){
    letterServices.getAllDepartments().success(function (response) {
       $scope.office = response;
        });
    letterServices.getAllPositions().success(function (response) {
        $scope.pos = response;
    });
}]);