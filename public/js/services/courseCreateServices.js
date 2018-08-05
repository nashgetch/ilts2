app.factory('courseCreateServices', ['$http', function($http){
    return{
        createCourse: function(courseData){
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: baseUrl + 'admin/createCourse',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    course_name: courseData.course_name,
                    belongs_to_dept: courseData.belongs_to_dept,
                    no_of_modules:courseData.no_of_modules,
                    desc:courseData.desc
                })
            });
        },
        getAllCourses: function(){
            return $http.get(baseUrl + 'admin/courses');
        },
        getEnrolledCourses: function(){
            return $http.get(baseUrl + 'enrolled_in');
        },
        getSingleCourse: function(id){
            return $http.get(baseUrl + 'admin/courses/' + id);
        },
        viewEnrolled: function(id){
            return $http.get(baseUrl + 'viewEnrolled/' + id);
        },
        getGrade: function(id){
            return $http.get(baseUrl + 'admin/grade/' + id);
        },
        createModule: function(courseData){
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: baseUrl + 'admin/createCourse',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    course_name: moduleData.course_name,
                    belongs_to_dept: moduleData.belongs_to_dept,
                    no_of_modules:moduleData.no_of_modules,
                    description:moduleData.desc
                })
            });
        }
    };
}]);