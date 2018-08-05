app.factory('inboxServices', ['$http', function($http){
    return{
        getAllLetters: function(){
            return $http.get(baseUrl + 'letter/inbox');
        },
        getSingleLetter: function(id){
            return $http.get(baseUrl + 'letter/inbox/' + id);
        },
        viewFile: function(filename){
            return $http.get(baseUrl + 'letter/inbox/file/' + filename, {responseType: 'blob'});
        },
        getAllSent: function(){
            return $http.get(baseUrl + 'letter/sent');
        }
    };
}]);