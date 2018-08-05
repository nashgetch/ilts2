app.factory('quizServices', ['$http', function($http){
    return{
        createQuiz: function(courseData){
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                url: baseUrl + 'createQuiz',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    course_name: courseData.course_name,
                    chapter_no: courseData.chapter_no,
                    qType:courseData.qType,
                    c1: courseData.c1,
                    c2: courseData.c2,
                    c3: courseData.c3,
                    question:courseData.question,
                    ans: courseData.ans
                })
            });
        },
        getSingleQuiz: function(course_name, chapter_no){
            return $http.get(baseUrl + 'quiz/' + course_name + '/' + chapter_no);
        },
         
    };
}]);