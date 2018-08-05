app.controller('adminNavController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
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
            }, {
                link: 'Create Offices',
                url: '/createD'
            },
                {
                    link: 'Create Courses',
                    url: '/admin/createCourse'
                },
                {
                    link: 'Create Quizzes',
                    url: '/createQuiz'
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
