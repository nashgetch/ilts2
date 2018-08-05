app.controller('forumController', ['$location', '$http', '$scope', 'forumServices','$routeParams', '$sce',
    function($location, $http, $scope, forumServices, $routeParams, $sce) {
        angular.extend($scope, {
            newAnswer: {},
            singlePost: {}
        });
    angular.extend($scope, {
        ask: function(id){
            $location.path('/forum/create/' + id);
        },
        viewPost: function(id){
            $location.path('/forum/post/' + id);
        }

    });
    
        if($routeParams.id){
            forumServices.getCoursePosts($routeParams.id).success(function (response) {
                $scope.posts = response;
                console.log(response);
            });
        }
        if($routeParams.id){
            forumServices.getComments($routeParams.id).success(function (response) {
                $scope.comments = response;
                console.log(response);
            });
        }
        
        $scope.comment = function(id){
            var url = baseUrl + "admin/comment/" + id;
            $http({ 
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                url: url,
                data: $.param({
                    body: $scope.newAnswer.message
                })

               
            }).success(function(response){
                console.log(response);
                $location.path('/forum/post/' + response.post_id);
            }).error(function(response){
                alert('This is embarassing');
            });
        };

        $scope.createPost = function(id){
            var url = baseUrl + "admin/createPost/" + id;
            $http({
                method: 'POST',
                url: url,
                data: $.param({
                    title: $scope.post_title,
                    body: $scope.post_mes
                }),
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response){
                console.log(response);
                $location.path('/dashboard');
            }).error(function(response){
                alert('This is embarassing');
            });
        };

}]);
