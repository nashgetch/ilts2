app.factory('sentServices', ['$http', function($http){
    return{
        getAllSent: function(){
            return $http.get(baseUrl + 'letter/sent');
        },
        getSingleSent: function(id){
            return $http.get(baseUrl + 'letter/sent/' + id);
        }
    };
}]);