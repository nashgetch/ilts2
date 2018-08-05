app.controller('adminGlobalController', ['$scope', function ($scope) {
    $scope.globals = {};
    $scope.globals.navUrl  = '/js/templates/partials/topnav.html';
    $scope.global.chat = '/js/templates/partials/chat_room.html';
}]);