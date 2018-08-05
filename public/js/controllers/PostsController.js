app.controller('PostsController',['$scope','$location','userModel', function($scope, $location, userModel) {

    angular.extend($scope, {

        doLogin: function(loginForm) {
            var data = {
                email: $scope.login.email,
                password: $scope.login.password
            };
            userModel.doLogin(data).then(function(){
                $location.path('/dashboard');
            });


        }

    });
}]);