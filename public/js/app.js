
var app = angular.module('myApp',[
    'ngRoute',
    'ngCookies',
     'ui.router',                   // Routing
    'oc.lazyLoad',                  // ocLazyLoad
    'ui.bootstrap',                 // Ui Bootstrap
    'pascalprecht.translate',       // Angular Translate
    'ngIdle',                       // Idle timer
    'ngSanitize',
    'ngAnimate'
]);
//app.constant('VERSION', require('../../package.json').version);

app.filter('htmlToPlaintext', function() {
    return function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});
app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, ' ');
    };
});
app.config(function($routeProvider, $locationProvider, $ocLazyLoadProvider){
    $routeProvider.when('/',{
        templateUrl:'/js/templates/login.html',
        controller:'PostsController'
    });
    $routeProvider.when('/register', {
       templateUrl:'/js/templates/register.html',
        controller:'RegistrationController'
    });
    $routeProvider.when('/fileUpload', {
        templateUrl:'/js/templates/fileUp.html',
        authenticated: true
    });
    $routeProvider.when('/letter/compose',{
        templateUrl:'/js/templates/letter/compose.html',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/forum/create/:id',{
        templateUrl:'/js/templates/create_posts.html',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/admin/createCourse',{
        templateUrl:'/js/templates/admin/createCourse.html',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                    },
                    {
                        files: ['css/plugins/touchspin/jquery.bootstrap-touchspin.min.css', 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/admin',{
        templateUrl:'/js/templates/admin/admin.html',
        controller:'PostsController',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/iCheck/custom.css','js/plugins/iCheck/icheck.min.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/letter/inbox',{
        templateUrl:'/js/templates/letter/inbox.html',
        controller:'inboxController',
        authenticated: true
    });
    $routeProvider.when('/arduino',{
        templateUrl:'/js/templates/arduino.html',
        data: { pageTitle: 'Code Editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['css/plugins/codemirror/codemirror.css','css/plugins/codemirror/ambiance.css','js/plugins/codemirror/codemirror.js','js/plugins/codemirror/mode/javascript/javascript.js']
                        },
                        {
                            name: 'ui.codemirror',
                            files: ['js/plugins/ui-codemirror/ui-codemirror.min.js']
                        }
                    ]);
                }
            },
        authenticated: true
    });
    $routeProvider.when('/java',{
        templateUrl:'/js/templates/java.html',
        data: { pageTitle: 'Code Editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['css/plugins/codemirror/codemirror.css','css/plugins/codemirror/ambiance.css','js/plugins/codemirror/codemirror.js','js/plugins/codemirror/mode/javascript/javascript.js']
                        },
                        {
                            name: 'ui.codemirror',
                            files: ['js/plugins/ui-codemirror/ui-codemirror.min.js']
                        }
                    ]);
                }
            },
        authenticated: true
    });
    $routeProvider.when('/cpp',{
        templateUrl:'/js/templates/cpp.html',
        data: { pageTitle: 'Code Editor' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            serie: true,
                            files: ['css/plugins/codemirror/codemirror.css','css/plugins/codemirror/ambiance.css','js/plugins/codemirror/codemirror.js','js/plugins/codemirror/mode/javascript/javascript.js']
                        },
                        {
                            name: 'ui.codemirror',
                            files: ['js/plugins/ui-codemirror/ui-codemirror.min.js']
                        }
                    ]);
                }
            },
        authenticated: true
    });
    $routeProvider.when('/modulesOfCourse/:id', {
        templateUrl:'/js/templates/admin/moduleView.html',
        authenticated: true
    });
    $routeProvider.when('/grade/:id', {
        templateUrl:'/js/templates/addGrade.html',
        authenticated: true
    });
    $routeProvider.when('/quiz/:course_name/:chapter_no', {
        templateUrl:'/js/templates/startQuiz.html',
        authenticated: true
    });
    $routeProvider.when('/viewEnrolled/:id', {
        templateUrl:'/js/templates/enrolledStuds.html',
        authenticated: true
    });
    $routeProvider.when('/createQuiz', {
        templateUrl:'/js/templates/create_quizzes.html',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                    },
                    {
                        files: ['css/plugins/touchspin/jquery.bootstrap-touchspin.min.css', 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/admin/courses',{
        templateUrl:'/js/templates/admin/course.html',
        authenticated: true
    });
    $routeProvider.when('/admin/forum/:id',{
        templateUrl:'/js/templates/Forum.html',
        authenticated: true
    });
    $routeProvider.when('/forum/post/:id',{
        templateUrl:'/js/templates/postView.html',
        authenticated: true
    });
    $routeProvider.when('/admin/grade/:id',{
        templateUrl:'/js/templates/student/enrolled.html',
        authenticated: true,
        controller:'forumController'
    });
    $routeProvider.when('/admin/modules/:id',{
        templateUrl:'/js/templates/admin/createModule.html',
        authenticated: true,
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js']
                    },
                    {
                        name: 'summernote',
                        files: ['css/plugins/summernote/summernote.css','css/plugins/summernote/summernote-bs3.css','js/plugins/summernote/summernote.min.js','js/plugins/summernote/angular-summernote.min.js']
                    },
                    {
                        files: ['css/plugins/dropzone/basic.css','css/plugins/dropzone/dropzone.css','js/plugins/dropzone/dropzone.js']
                    },
                    {
                        files: ['css/plugins/touchspin/jquery.bootstrap-touchspin.min.css', 'js/plugins/touchspin/jquery.bootstrap-touchspin.min.js']
                    }
                ]);
            }
        }
    });
    $routeProvider.when('/letter/sent',{
        templateUrl:'/js/templates/letter/sent.html',
        controller:'sentController',
        authenticated: true
    });
    $routeProvider.when('/letter/draft',{
        templateUrl:'/js/templates/letter/draft.html',
        controller:'draftController',
        authenticated: true
    });
    $routeProvider.when('/letter/approved',{
        templateUrl:'/js/templates/letter/approved.html',
        controller:'approvedController',
        authenticated: true
    });
    $routeProvider.when('/dashboard',{
        templateUrl:'/js/templates/dashboard.html',
        controller:'PostsController',
        authenticated: true
        });
    $routeProvider.when('/admin_dashboard',{
        templateUrl:'/js/templates/admin_dashboard.html',
        controller:'PostsController',
        authenticated: true
        });
    $routeProvider.when('/createD',{
        templateUrl:'/js/templates/admin/offices/createDepartment.html',
        controller:'deptController',
        authenticated: true
    });
    $routeProvider.when('/createPositions',{
        templateUrl:'/js/templates/admin/offices/createPositions.html',
        controller:'posController',
        authenticated: true
    });
    $routeProvider.when('/logout',{
        templateUrl:'/js/templates/login.html',
        controller:'PostsController',
        authenticated: true
    });
    $routeProvider.when('/landing',{
        templateUrl:'/js/templates/letter/landing.html',
        resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/plugins/wow/wow.min.js']
                        }
                    ]);
                }
            }
    });
    
    $routeProvider.when('/offices',{
        templateUrl:'/js/templates/admin/offices/table_data_tables.html',
        controller:'datatablesCtrl',
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        serie: true,
                        files: ['/js/plugins/dataTables/datatables.min.js','css/plugins/dataTables/datatables.min.css']
                    },
                    {
                        serie: true,
                        name: 'datatables',
                        files: ['/js/plugins/dataTables/angular-datatables.min.js']
                    },
                    {
                        serie: true,
                        name: 'datatables.buttons',
                        files: ['/js/plugins/dataTables/angular-datatables.buttons.min.js']
                    }
                ]);
            }
        },
        authenticated: true
    });
    $routeProvider.when('/offices:id',{
        templateUrl:'/js/templates/departments.html',
        controller:'datatablesCtrl',
        authenticated: true
    });
    $routeProvider.when('/letter/inbox/:id',{
        templateUrl:'/js/templates/letter/email_view.html',
        authenticated: true
    });
    $routeProvider.when('/admin/grade',{
        templateUrl:'/js/templates/admin/grade.html',
        authenticated: true
    });
    $routeProvider.when('/admin/courses/:id',{
        templateUrl:'/js/templates/admin/course_view.html',
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: ['css/plugins/slick/slick.css','css/plugins/slick/slick-theme.css','js/plugins/slick/slick.min.js']
                    },
                    {
                        name: 'slick',
                        files: ['js/plugins/slick/angular-slick.min.js']
                    }
                ]);
            }
        },
        authenticated: true
    });
    $routeProvider.when('/letter/approved/:id',{
        templateUrl:'/js/templates/letter/approved_view.html',
        authenticated: true
    });
    $routeProvider.when('/letter/sent/:id',{
        templateUrl:'/js/templates/letter/sent_view.html',
        authenticated: true
    });
    $routeProvider.when('/letter/draft/:id',{
        templateUrl:'/js/templates/letter/compose.html',
        authenticated: true
    });
    $routeProvider.when('/modulesOfCourse/file/:filename',{
        templateUrl:'/js/templates/admin/pdfFiles.html',
        authenticated: true
    });
    $routeProvider.when('/enrolled_in',{
        templateUrl:'/js/templates/enrolled_in.html',
        authenticated: true
    });
    $routeProvider.when('/letter/inbox/file/:filename',{
        templateUrl:'/js/templates/letter/file.html',
        authenticated: true
    });
    $routeProvider.when('/chat_rooms',{
        templateUrl:'/js/templates/First.html'

    });
    $routeProvider.when('/carousel', {
        templateUrl: "views/carousel.html",
        authenticated: true
    });
    $routeProvider.otherwise('/');
});
app.run(["$rootScope", "$location", 'userModel',
function($rootScope, $location, userModel){
    $rootScope.$on("$routeChangeStart",
        function(event, next, current){
            if(next.$$route.authenticated){
                if(!userModel.getAuthStatus()){
                    $location.path('/');
                }
            }
            if(next.$$route.originalPath == '/'){
                console.log('Login page');
                if(userModel.getAuthStatus()){
                $location.path(current.$$route.originalPath);
            }
            }
        });
}
]);
app.directive('restrict', function(userModel){
	return{
		restrict: 'A',
		prioriry: 100000,
		scope: false,
		link: function(){
			// alert('ergo sum!');
		},
		compile:  function(element, attr, linker){
			var accessDenied = true;
			var user = userModel.getUserObject();
			
			var attributes = attr.access.split(" ");
			for(var i in attributes){
				if(user.role != "student"){
					accessDenied = false;
				}
			}


			if(accessDenied){
				element.children().remove();
				element.remove();			
			}

		}
	}
});