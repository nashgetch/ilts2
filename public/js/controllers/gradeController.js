app.controller('gradeController', ['$scope', '$location', 'gradeServices', '$routeParams', '$sce', '$http',
    function($scope, $location, gradeServices, $routeParams, $sce, $http){
    angular.extend($scope, {
        enr: {},
        enrolled: {},
        enrolled_in: []
    });
    gradeServices.getAllCourses().success(function (response) {
        $scope.courses = response;
        console.log(response);
    });
    gradeServices.getEnrolledCourses().success(function (response) {
        $scope.enrolled_in = response;
        console.log(response);
    });
    if($routeParams.id){
        gradeServices.viewEnrolled($routeParams.id).success(function (response) {
            $scope.enr = response;
            console.log(response);
        });
    }
        if($routeParams.id){
            gradeServices.getGrade($routeParams.id).success(function (response) {
                $scope.enrolled = response;
                console.log(response);
            });
        }
    angular.extend($scope, {
            newCourse: {},
            errorDiv: false,
            errorMessages: []
        });

        angular.extend($scope, {
            createC: function(courseForm){
                console.log(courseForm);
                    var data = {
                        course_name: $scope.newCourse.name,
                        belongs_to_dept: $scope.newCourse.dept,
                        no_of_modules: $scope.newCourse.modules,
                        desc: $scope.newCourse.desc
                    };
                console.log(data);
                    gradeServices.createCourse(data).success(function(response){
                        $location.path('/admin/modules/' + response.id);
                    });
            },
            viewCourse: function(id){
                $location.path('/admin/courses/' + id);
            },
            goto: function(id){
                $location.path('/admin/forum/' + id);

            },
            addM: function(id){
                $location.path('/admin/modules/' + id);

            },
            gotoGrade: function(id){
                $location.path('/admin/grade/' + id);

            },
            gotoModule: function(id){
                $location.path('/modulesOfCourse/' + id);
            }
        });
        $scope.enroll = function(id){
            var url = baseUrl + "admin/courses/" + id + '/' + 'enroll';
            $http({
                method: 'POST',
                url: url,
                data: $.param(id),
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response){
                console.log(response);
                $location.path('/modulesOfCourse/' + id);
            }).error(function(response){
                alert('This is embarassing');
            });
        };
       
        $scope.createModule = function(id, num){
            var url = baseUrl + "admin/modules/" + id + '/' + num;
            $http({
                method: 'POST',
                url: url,
                data: $.param(

                ),
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response){
                console.log(response);
                $location.path('/admin/courses/' + id);
            }).error(function(response){
                alert('This is embarassing');
            });
        }
}]);