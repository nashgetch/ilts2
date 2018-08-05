app.controller('draftController', ['$location', '$scope', 'draftServices','$routeParams', '$sce', function($location, $scope, draftServices, $routeParams) {

    draftServices.getAllDrafts().success(function (response) {
        $scope.drafts = response;
        console.log(response);
    });
    angular.extend($scope, {
        draft: {}
    });
    if($routeParams.id){
        draftServices.getSingleDraft($routeParams.id).success(function (response) {
            $scope.draft = response;
            $location.path('/letter/compose/');
        });
    }
    angular.extend($scope, {
        viewDraft: function(id){
            $location.path('/letter/compose/');
        }
    });
}]);