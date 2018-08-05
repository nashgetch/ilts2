@extends('layout')
@section('content')

        <div class="col-sm-8 blog-main">

        <h2 class="blog-post-title">{{$post->title}}</h2>

            {{$post->body}}
            <hr>
            <div class="comments">
                <ul class="list-group">
                @foreach($post->comments as $com)
                    <article>
                       <Strong>
                           {{$com->created_at->diffForHumans()}}
                       </Strong>
                        <li class="list-group-item">{{$com->body}}</li>
                    </article>
                    </ul>
                    @endforeach
            </div>
            <hr>
        <div class="card">
            <div class="card-block">
                <form class="form-group" method="POST" action="/posts/{{$post->id}}/comments">
                    {{csrf_field()}}
                    <textarea class="form-control" name="body" placeholder="Add Your Comments Here...">
                    </textarea><br>
                    <button type="submit" name = "publish" class="btn btn-primary">Add Comment</button>
                </form>

            </div>
            @include('layouts.error')
        </div>
    </div><!-- /.blog-post -->


@endsection