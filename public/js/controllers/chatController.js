app.controller('chatController', function($routeParams, $scope, $location, chatServices){
    angular.extend($scope, {
        newAnswer: {}
    });
    if($routeParams.id){
        chatServices.getSinglePost($routeParams.id).success(function (response) {
            $scope.posts = response;
            console.log(response);
        });
    }
});