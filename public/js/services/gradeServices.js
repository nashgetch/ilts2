app.factory('gradeServices', ['$http', function($http){
    return{
        viewEnrolled: function(id){
            return $http.get(baseUrl + 'viewEnrolled/' + id);
        }
    };
}]);