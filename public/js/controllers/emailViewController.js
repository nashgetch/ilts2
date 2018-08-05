app.controller('emailViewController', ['$location', '$scope', 'emailViewServices', function($location, $scope, emailViewServices) {
    emailViewServices.getSingleLetter().success(function (response) {
        $scope.letter = response;
    });
}]);