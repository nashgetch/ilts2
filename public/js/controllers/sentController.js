app.controller('sentController', ['$location', '$http', '$scope', 'sentServices','$routeParams', '$sce', function($location, $http, $scope, sentServices, $routeParams, $sce) {
    sentServices.getAllSent().success(function (response) {
        $scope.inbox = response;
        console.log(response);
    });
    angular.extend($scope, {
        singleLetter: {}
    });
    if($routeParams.id){
        sentServices.getSingleSent($routeParams.id).success(function (response) {
            $scope.singleLetter = response;
            console.log(response);
        });
    }
    if($routeParams.filename){
        sentServices.viewFile($routeParams.filename).success(function (response) {
            var files = new Blob([response], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(files);
            $scope.file = $sce.trustAsResourceUrl(fileURL);
        });
    }
    angular.extend($scope, {
        viewSentLetter: function(id){
            $location.path('/letter/sent/' + id);
        },
        viewFile: function(filename){
            $location.path('/letter/sent/file/' + filename);
        }
    });
    $scope.deleteFile = function (id, filename) {
        var url = baseUrl + "letter/delete/" + id + '/' + filename;
        var conf = confirm("Do you really want to delete this file?");

        if (conf == true) {
            var request = {
                method: 'POST',
                url: url,
                data: $scope.singleLetter[id],
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            };

            $http(request)
                .then(function success(e) {
                    alert('Letter Successfully deleted!');
                        $location.path('/letter/sent/');
                });
        }
    };
}]);
