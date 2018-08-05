@extends('layouts.app')
<script src="/app/js/PostsController.js"></script>
<script src="/app/js/route.js"></script>
<div ng-app="myApp">
<div class="blog-post" data-ng-controller="SessionController">
    <div  ng-repeat="x in let">
    <h2 class="blog-post-title">{{x.title}}</h2>

    <p class="blog-post-meta">
        {{x.body}}
    <p>
        {{x.created_at}}
    </p>

    </div>
    </div>
</div><!-- /.blog-post -->
