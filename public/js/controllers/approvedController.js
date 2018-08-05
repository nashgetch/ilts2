app.controller('approvedController', ['$location', '$scope', 'approvedServices','$routeParams', '$sce', function($location, $scope, approvedServices, $routeParams, $sce) {

    approvedServices.viewApproved().success(function (response) {
        $scope.approved = response;
        console.log(response);
    });
    angular.extend($scope, {
        singleLetter: {}
    });
    if($routeParams.id){
        approvedServices.getSingleApproved($routeParams.id).success(function (response) {
            $scope.singleLetter = response;
            console.log(response);
        });
    }
    angular.extend($scope, {
        viewApprovedLetter: function(id){
            $location.path('/letter/approved/' + id);
        },
        viewFile: function(filename){
            $location.path('/letter/inbox/file/' + filename);
        }
    });
}]);
