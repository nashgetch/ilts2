app.factory('moduleCreateServices', ['$http', function($http){
    return{
        getSingleModule: function(id){
            return $http.get(baseUrl + 'modulesOfCourse/' + id);
        },
        viewFile: function(filename){
            return $http.get(baseUrl + 'modulesOfCourse/file/' + filename, {responseType: 'blob'});
        }
    };
}]);