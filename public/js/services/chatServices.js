app.factory('chatServices', ['$http', function($http){
    return{
        getSinglePost: function(id){
            return $http.get(baseUrl + 'forum/post/' + id + '/single');
        }
    };
}]);