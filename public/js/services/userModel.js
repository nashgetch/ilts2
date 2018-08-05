app.factory('userModel', ['$http', '$cookies', function($http, $cookies){
    var userModel = {};
    var errorDiv = false;
    userModel.doLogin = function(loginData){

        //console.log(loginData);
        return $http({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: baseUrl + 'login',
            method: 'POST',
            data: $.param({
                email: loginData.email,
                password: loginData.password
            })

        }).success(function(response){
            console.log(response);
            $cookies.put('auth', JSON.stringify(response));
        }).error(function(data, status, headers) {
            console.log(data, status, headers);
            errorDiv = true;
         });
    };
    userModel.getAuthStatus = function(){
        var status = $cookies.get('auth');
        if(status){
            return true;
        }
        else{
            return false;
        }
    };
    userModel.doUserLogout = function(){
        $cookies.remove('auth');
    };
    userModel.getUserObject = function(){
        var userObj = angular.fromJson($cookies.get('auth'));
        return userObj;
    }

    return userModel;
}])
