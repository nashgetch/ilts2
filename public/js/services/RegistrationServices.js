app.factory('RegistrationServices', ['$http', function($http, CSRF_FIELD){
    return{
        doSignUp: function(regData){
            console.log(CSRF_FIELD);
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                },
                url: baseUrl + 'register',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    name: regData.name,
                    email: regData.email,
                    password:regData.password

                })
            });
        }
    };
}]);