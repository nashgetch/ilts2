app.controller('testController', function ($scope, fileUpload) {
    function success (msg) {
        console.log('Success got fired!');
        console.log(msg);
    }

    function error (err) {
        if (err.statusText)
            $scope.error = err.statusText
        else
            $scope.error = err;
        console.log('Got an error!')
        console.log(err);
    }

    function errorE (err) {
        if (err.statusText)
            $scope.errorE = err.statusText;
        else
            $scope.errorE = err;

        console.log('Got an error!');
        console.log(err);
    }

    function errorM (err) {
        $scope.errorM = err.statusText;
    }

    function notify (percent) {
        $scope.percent = percent;
        console.log('Got notified the percent of upload is:' + percent);
    }

    function notifyE (percent) {
        $scope.percentE = percent;
        console.log('Got notified the percent of upload is:' + percent);
    }

    function notifyM (percent) {
        $scope.percentM = percent;
    }

    $scope.uploadSimple = function () {
        fileUpload.post(
            '/upload',
            document.getElementById('simple-file').files
        ).then(success, error, notify);
    };

    $scope.uploadExtra = function () {
        var config = {
            headers: {
                'Authentication': 'Bearer randombearerextra',
                'X-Im-So-Cool': 'I Know'
            },
            data: {
                'field1': 'RandomData',
                'field2': 'Another field with data'
            }
        };

        fileUpload.post(
            '/upload',
            document.getElementById('extra-file').files,
            config
        ).then(success, errorE, notifyE);
    };
    $scope.uploadMultiple = function () {
        fileUpload.post(
            '/upload',
            document.getElementById('multiple-file').files
        ).then(success, errorM, notifyM);
    }

});