app.controller('RegistrationController',['$scope','$http', "RegistrationServices",'$location', '$cookies',

    function($scope,$http, RegistrationServices, $location, $cookies){
    angular.extend($scope, {
        newUser: {},
        errorDiv: false,
        errorMessages: []
    });
    angular.extend($scope, {
        doSignUp: function(regForm){
            console.log(regForm);
            if(regForm.$valid){
                $scope.formSubmitted = false;
                var data = {
                    name: $scope.newUser.name,
                    email: $scope.newUser.email,
                    password: $scope.newUser.password
                };
                RegistrationServices.doSignUp(data).success(function(response){
                    $cookies.put('auth', JSON.stringify(response));
                    $location.path('/dashboard');
                });
            }
            else{
                $scope.formSubmitted = true;
                console.log('error');
            }
        }
    });
}]);
