app.factory('approvedServices', ['$http', function($http){
    return{
        viewApproved: function(){
            return $http.get(baseUrl + 'letter/approved');
        },
        getSingleApproved: function(id){
            return $http.get(baseUrl + 'letter/approved/' + id);
        }
    };
}]);