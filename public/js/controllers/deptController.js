app.controller('deptController', ['$location', '$scope', 'deptServices', function($location, $scope, deptServices){
angular.extend($scope, {
    newDept: {},
    errorDiv: false,
    errorMessages: []
});
angular.extend($scope, {
     createDept: function(dept){
         console.log(dept);
         if(dept.$valid){
             $scope.formSubmitted = false;
             var data = {
                 dept_name: $scope.newDept.name,
                 dept_desc: $scope.newDept.desc
             };
             deptServices.createDept(data).success(function(response){
                 $location.path('/offices');
             });
         }
         else{
             $scope.formSubmitted = true;
             console.log('error');
         }
     }
    });
}]);