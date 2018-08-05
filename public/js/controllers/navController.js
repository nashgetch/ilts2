app.controller('navController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
    angular.extend($scope, {
        user: userModel.getUserObject(),
        navUrl:[{
            link: 'Home',
            url: '/dashboard',
            subMenu: [{
                link: 'Letter',
                url: '/letter/compose'
            }, {
                link: 'Inbox',
                url: '/letter/inbox'
            }
        ]
        },{
            link: 'Courses',
            url: '/admin/courses'
        },{
            link: 'Inbox',
            url: '/letter/inbox'
        },{
            link: 'Departments',
            url: '/offices'
        }]
    });
    angular.extend($scope, {
        doLogout: function(){
            userModel.doUserLogout();
            $location.path('/');
        },
        checkActiveLink: function(routeLink){
            if($location.path() == routeLink){
                return 'make-active';
            }
        }
    });
}]);