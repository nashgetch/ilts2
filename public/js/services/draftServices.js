app.factory('draftServices', ['$http', function($http){
    return{
        getAllDrafts: function(){
            return $http.get(baseUrl + 'letter/draft');
        },
        getSingleDraft: function(id){
            return $http.get(baseUrl + 'letter/draft/' + id);
        }
    };
}]);