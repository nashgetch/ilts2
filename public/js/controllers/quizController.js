app.controller('quizController', ['$scope', '$location', 'quizServices', '$routeParams', '$sce', '$http',
    function($scope, $location, quizServices, $routeParams, $sce, $http){
    angular.extend($scope, {
        course: {},
        nash: {},
        enrolled_in: []
    });
    // quizServices.getAllCourses().success(function (response) {
    //     $scope.courses = response;
    //     console.log(response);
    // });
    angular.extend($scope, {
            newCourse: {},
            errorDiv: false,
            errorMessages: []
        });
    if($routeParams.course_name, $routeParams.chapter_no){
        quizServices.getSingleQuiz($routeParams.course_name, $routeParams.chapter_no).success(function (response) {
            $scope.quizzes= response;
            console.log(response);
        });
    }
        angular.extend($scope, {
            createQuiz: function(quiz){
                console.log(quiz);
                    var data = {
                        course_name: $scope.course_name,
                        chapter_no: $scope.chapter_no,
                        qType: $scope.qType,
                        c1: $scope.c1,
                        c2: $scope.c2,
                        c3: $scope.c3,
                        question: $scope.question,
                        ans: $scope.ans
                    };
                console.log(data);
                    quizServices.createQuiz(data).success(function(response){
                        console.log(response);
                        $scope.quizzes = response;
                    });
            },
            viewQuiz: function(course_name, chapter_no){
                $location.path('quiz/' + course_name + '/' + chapter_no);
            }
        });
        $scope.checkAnswer = function(id){
            var url = baseUrl + "checkAnswer/" + id;
            $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                url: url,
                dataType: 'json',
                data: $.param({code: $scope.nash.code}),
               
            
            }).success(function(response){
                console.log(response);
                $scope.answer = response;
                if(response == 'correct'){
                    alert('The answer is correct. Good Job!');
                }
                else{
                    alert('That is not Quite it Yet. Keep Trying.You are Doing a Good Job!');
                }
            }).error(function(response){
                alert('This is embarassing');
            });
            
        };
       
}]);