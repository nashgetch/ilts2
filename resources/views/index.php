<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <link href="css/animate.css" rel="stylesheet">

    <link id="loadBefore" href="css/style.css" rel="stylesheet">

    <script>
        var baseUrl = "{{ url('/') }}/";
        var csrfToken = "{{csrf_token()}}";
    </script>

    <title>ILTS+</title>
</head>
<body ng-controller="MainCtrl as main" class="{{$state.current.data.specialClass}}" landing-scrollspy id="page-top">
<div ng-controller="GlobalController">
<div ng-view></div>
</div>
<script src="js/jquery/jquery-2.1.1.min.js"></script>
<script src="js/plugins/jquery-ui/jquery-ui.js"></script>
<script src="/js/bootstrap/bootstrap.min.js"></script>
<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<!-- Peace JS -->
<script src="js/plugins/pace/pace.min.js"></script>
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
<script src="/js/controllers/posController.js"></script>
<script src="/js/controllers/letterController.js"></script>
<script src="/js/controllers/inboxController.js"></script>
<script src="/js/controllers/emailViewController.js"></script>
<script src="/js/services/inboxServices.js"></script>
<script src="/js/services/emailViewServices.js"></script>
<script src="/js/services/deptServices.js"></script>
<script src="/js/services/letterServices.js"></script>
<script src="/js/services/posServices.js"></script>
<script src="/js/controllers/deptController.js"></script>

<script src="/js/controllers/GlobalController.js"></script>
<script src="/js/controllers/navController.js"></script>
<script src="/js/controllers/PostController.js"></script>


<script src="/js/controllers/draftController.js"></script>
<script src="/js/services/draftServices.js"></script>
<script src="/js/controllers/approvedController.js"></script>
<script src="/js/services/approvedServices.js"></script>
</body>
</html>
