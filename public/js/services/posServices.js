app.factory('posServices', ['$http', function($http){
    return{
        createPositions: function(posData){
            return $http({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                },
                url: baseUrl + 'createPositions',
                method: 'POST',
                dataType: 'json',
                data: $.param({
                    p_name: posData.p_name,
                    d_name: posData.d_name,
                    isHead: posData.isHead
                })
            });
        },
        getAllPositions: function(){
            return $http.get(baseUrl + 'createPositions');
        }
    };

}]);