app.factory('letterServices', ['$http', function($http, CSRF_TOKEN){
    console.log(CSRF_TOKEN);
    return{
        getAllDepartments: function(){
            return $http.get(baseUrl + 'createDepartment');
        },
        getAllPositions: function(){
            return $http.get(baseUrl + 'createPositions');
        }
        }

}]);