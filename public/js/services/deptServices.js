app.factory('deptServices', ['$http', function($http, CSRF_TOKEN){
    return{
        createDept: function(deptData){
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                },
                url: baseUrl + 'createDepartment',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    dept_name: deptData.dept_name,
                    dept_desc: deptData.dept_desc
                })
            });
        },
        getAllDepartments: function(){
            return $http.get(baseUrl + 'createDepartment');
        }

    };

}]);