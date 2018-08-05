<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    
    <script>
        var baseUrl = "{{ url('/') }}/";
        var csrfToken = "{{csrf_token()}}";
    </script>
    <link href="css/carousel.css" rel="stylesheet">
    <link rel="icon" href="../../../../favicon.ico">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link id="loadBefore" href="css/style.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">
    <script src="/js/jquery/jquery-2.1.1.min.js"></script>
    <script src="/js/plugins/jquery-ui/jquery-ui.js"></script>
    <title>SL+</title>
    
</head>
<body ng-controller="MainCtrl as main" style="
font-family: 'Roboto', lucida grande, lucida sans unicode, helvetica, arial, sans-serif;
background-color: white; ">
    
<div ng-controller="GlobalController">
    <div ng-view></div>
</div>

<script>
 
  {{-- require(['../../node_modules/johnny-five/lib/johnny-five.js'], function(){ --}}

  {{-- }); --}}
</script>
<script src="/js/bootstrap/bootstrap.min.js"></script>
<script src="/js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<!-- Peace JS -->
<script src="/js/plugins/pace/pace.min.js"></script>

<script src="/js/inspinia.js"></script>

<!--<link href="/css/nav.css" rel="stylesheet">-->
<script src="/js/angular/angular.min.js"></script>
<script src="js/angular/angular-sanitize.js"></script>
<script src="/js/plugins/oclazyload/dist/ocLazyLoad.min.js"></script>
<script src="js/angular-translate/angular-translate.min.js"></script>
<script src="js/ui-router/angular-ui-router.min.js"></script>
<script src="/js/bootstrap/ui-bootstrap-tpls-1.1.2.min.js"></script>
<script src="/js/plugins/angular-idle/angular-idle.js"></script>
<script src="/js/angular/angular-cookies.min.js"></script>
<script src="/js/angular/angular-route.min.js"></script>

<script src="js/ui-router/angular-ui-router.min.js"></script>
<script src="js/angular/angular-animate.min.js"></script>

<!-- Custom and plugin javascript -->

<script src="/js/app.js"></script>
<script src="/js/translations.js"></script>
<script src="/js/directives.js"></script>
<script src="/js/controllers.js"></script>

<script src="/js/services/userModel.js"></script>
<script src="/js/plugins/pace/pace.min.js"></script>
<script src="/js/script.js"></script>
<script src="/js/controllers/PostsController.js"></script>
<script src="/js/controllers/RegistrationController.js"></script>
<script src="/js/controllers/posController.js"></script>
<script src="/js/controllers/letterController.js"></script>
<script src="/js/controllers/inboxController.js"></script>
<script src="/js/controllers/emailViewController.js"></script>
<script src="/js/services/inboxServices.js"></script>
<script src="/js/services/RegistrationServices.js"></script>
<script src="/js/services/emailViewServices.js"></script>
<script src="/js/services/deptServices.js"></script>
<script src="/js/services/letterServices.js"></script>
<script src="/js/services/posServices.js"></script>
<script src="/js/controllers/deptController.js"></script>
<script src="/js/controllers/forumController.js"></script>
<script src="/js/controllers/arduinoController.js"></script>
<script src="/js/controllers/javaController.js"></script>
<script src="/js/controllers/cppController.js"></script>
<script src="/js/controllers/testController.js"></script>
<script src="/js/controllers/chatController.js"></script>
<script src="/js/services/forumServices.js"></script>
<script src="/js/services/fileUpload.js"></script>
<script src="/js/services/codeServices.js"></script>
<script src="/js/services/chatServices.js"></script>
<script src="/js/controllers/GlobalController.js"></script>
<script src="/js/controllers/adminGlobalController.js"></script>
<script src="/js/controllers/navController.js"></script>
<script src="/js/controllers/adminNavController.js"></script>
<script src="/js/controllers/gradeController.js"></script>
<script src="/js/controllers/PostController.js"></script>
<script src="/js/controllers/draftController.js"></script>
<script src="/js/controllers/CourseCreateController.js"></script>
<script src="/js/controllers/moduleCreateController.js"></script>
<script src="/js/services/draftServices.js"></script>
<script src="/js/services/courseCreateServices.js"></script>
<script src="/js/services/gradeServices.js"></script>
<script src="/js/services/moduleCreateServices.js"></script>
<script src="/js/controllers/approvedController.js"></script>
<script src="/js/controllers/quizController.js"></script>
<script src="/js/services/quizServices.js"></script>
<script src="/js/controllers/sentController.js"></script>
{{--  <script src="node_modules/johnny-five/lib/johnny-five.js"></script>  --}}
<script src="/js/services/approvedServices.js"></script>
<script src="/js/services/sentServices.js"></script>
{{--  <script src="js/plugins/oclazyload/examples/requireJSExample/js/require.js"></script>  --}}
{{--  <script src="/js/main.js"></script>   --}}
</body>
</html>
