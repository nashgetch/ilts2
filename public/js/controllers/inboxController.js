app.controller('inboxController', ['$location', '$http', '$scope', 
'inboxServices','$routeParams', '$sce',
    function($location, $http, $scope, inboxServices, $routeParams, $sce) {
    $scope.myVal = false;
    inboxServices.getAllLetters().success(function (response) {
        $scope.inbox = response;
        console.log(response);
    });
    angular.extend($scope, {
        singleLetter: {}
    });
    if($routeParams.id){
        inboxServices.getSingleLetter($routeParams.id).success(function (response) {
            $scope.singleLetter = response;
            console.log(response);
        });
    }
    if($routeParams.filename){
        inboxServices.viewFile($routeParams.filename).then(function onSuccess(response) {
            var blob = response.data;
            var contentType = response.headers("content-type");
            var fileURL = URL.createObjectURL(blob);
            $scope.file = $sce.trustAsResourceUrl(fileURL);
        });
    }
    angular.extend($scope, {
       viewLetter: function(id){
           $location.path('/letter/inbox/' + id);
       },
        viewFile: function(filename){
            $location.path('/letter/inbox/file/' + filename);
        }
    });
    $scope.approved = function(id, filename){
        var url = baseUrl + "letter/inbox/file/" + id + '/' + filename + '/approve';
        $http({
            method: 'POST',
            url: url,
            data: $.param(true),
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response){
            console.log(response);
            $location.path('/letter/inbox/');
        }).error(function(response){
            alert('This is embarassing');
        });
    };
}]);
