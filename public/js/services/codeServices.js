app.factory('codeServices', ['$http', '$cookies', function($http, $cookies){
        return{
            createCourse: function(courseData){
                return $http({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    url: baseUrl + 'arduino/run',
                    method: 'POST',
                    dataType: 'json',
                    data: $.param({
                        course_name: courseData.course_name,

                    })
                });
            }
        }
   }])
