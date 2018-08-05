@extends('layout')
@section('content')
    <div class="blog-header">
        <div class="container">
            <h1 class="blog-title">Letter Tracker+</h1>
            <p class="lead blog-description">Demo Dashboard!</p>
        </div>
    </div>
            <div class="col-sm-8 blog-main">
                @foreach($posts as $pos)
                @include('posts.post')
                @endforeach
                <nav class="blog-pagination">
                    <a class="btn btn-outline-primary" href="#">Older</a>
                    <a class="btn btn-outline-secondary disabled" href="#">Newer</a>
                </nav>

            </div>
   @endsection