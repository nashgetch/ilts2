app.controller('moduleCreateController', 
['$scope', '$timeout', '$http', '$location', 
'moduleCreateServices', '$routeParams', '$sce',
function($scope,$timeout, $http, $location, 
    moduleCreateServices, $routeParams, $sce){
        var formData = new FormData();

        angular.extend($scope, {
            module1: {},
            modules:{}
        });
        angular.extend($scope, {
            course: {}
        });
        if($routeParams.id){
            moduleCreateServices.getSingleModule($routeParams.id).success(function (response) {
                
                $scope.module1 = response;
                console.log(response);
            });
        }
        if($routeParams.filename){
            moduleCreateServices.viewFile($routeParams.filename).then(function onSuccess(response) {
                var blob = response.data;
                var contentType = response.headers("content-type");
                var fileURL = URL.createObjectURL(blob);
                $scope.file = $sce.trustAsResourceUrl(fileURL);
            });
        }
        angular.extend($scope, {
            viewFile: function(filename){
                $location.path('/modulesOfCourse/file/' + filename);
            }
        });

        $scope.uploadFile = function (id) {
            $scope.loadingDemo = true;
            $timeout(function(){
                var request = {
                    method: 'POST',
                    url: '/admin/createModules/' + id,
                    data: formData,
                    headers: {
                        'Content-Type': undefined
                    }
                };
                $http(request)
                    .then(function success(e) {
                        $scope.files = e.data.files;
                        $scope.errors = [];
                        var fileElement = angular.element('file_field');
                        fileElement.value = '';
    
                        if(e.status == 201) {
    
                            alert("Files have been uploaded successfully!");
                        }
                        else{
                            alert('You need to upload the document with pdf format!');
                        }
                    }, function error(e) {
                        $scope.errors = e.data.errors;
                    });
                $scope.loadingDemo = false;
            },2000)
            
        };

        $scope.setTheFiles = function ($files) {
            angular.forEach($files, function (value, key) {

                formData.append('chapter_name', $scope.modules.name);
                formData.append('chapter_no', $scope.modules.chapter_no);
                formData.append('description', $scope.modules.desc);
                formData.append('file_field', value);
            });
        };
    }]);
app.directive('ngFiles', ['$parse', function ($parse) {
    function file_links(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, {$files: event.target.files});
        });
    }
    return {
        link: file_links
    }
}]);
