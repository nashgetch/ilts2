app.factory('emailViewServices', ['$http', function($http){
    return{
        getSingleLetter: function(id){
            return $http.get(baseUrl + 'letter/inbox/' + id);
        }

    };

}]);