app.factory('forumServices', ['$http', function($http){

    return{
        getCoursePosts: function(id){
            return $http.get(baseUrl + 'admin/forum/posts/' + id);
        },
        getComments: function(id){
            return $http.get(baseUrl + 'admin/forum/comment/' + id);
        }
    };
}]);