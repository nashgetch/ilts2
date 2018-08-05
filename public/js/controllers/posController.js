app.controller('posController', ['$location', '$scope', 'posServices', function($location, $scope, posServices){
    angular.extend($scope, {
        errorDiv: false,
        errorMessages: []
    });
    angular.extend($scope, {
        createPositions: function(posForm){
            console.log(posForm);
            if(posForm.$valid){
                $scope.formSubmitted = false;
                var data = {
                    d_name: $scope.newPos.d_name,
                    p_name: $scope.newPos.p_name,
                    isHead: $scope.newPos.isHead
                };
                console.log(data);
                posServices.createPositions(data).success(function(response){
                    $location.path('/offices');
                });
            }
            else{
                $scope.formSubmitted = true;
                console.log('error');
            }
        }
    });
}]);