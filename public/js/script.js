app.controller('FileUploadController', ['$scope', '$http', '$window', function ($scope, $http) {

    $scope.errors = [];
    $scope.files = [];

    var formData = new FormData();
    $scope.uploadDraft = function () {
        var request = {
            method: 'POST',
            url: '/letter/compose/draft',
            data:formData,
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
                    alert("You message has been saved in draft!");
            }, function error(e) {
                $scope.errors = e.data.errors;
            });
    };
    $scope.uploadFile = function () {

               var request = {
                   method: 'POST',
                   url: '/letter/compose',
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
                           alert("File has been uploaded successfully!");
                       }
                       else{
                           alert('You need to upload the letter document with pdf format!');
                       }
                   }, function error(e) {
                       $scope.errors = e.data.errors;
                   });

    };


    $scope.setTheFiles = function ($files) {
        angular.forEach($files, function (value, key) {

            formData.append('to_email', $scope.to_email);
            formData.append('letter_header', $scope.letter_header);
            formData.append('intended_to', $scope.intended_to);
            formData.append('letter_desc', $scope.letter_desc);
            formData.append('file_field', value);
        });
    };

    $scope.deleteFile = function (index) {
        var conf = confirm("Do you really want to delete this file?");

        if (conf == true) {
            var request = {
                method: 'POST',
                url: '/delete/file',
                data: $scope.files[index]
            };

            $http(request)
                .then(function success(e) {
                    $scope.errors = [];

                    $scope.files.splice(index, 1);

                }, function error(e) {
                    $scope.errors = e.data.errors;
                });
        }
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