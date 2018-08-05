app.controller('GlobalController', ['$scope', function ($scope) {
    $scope.global = {};
    $scope.global.navUrl  = '/js/templates/partials/nav.html';
    $scope.global.chat = '/js/templates/partials/chat_room.html';
}]);