<?php

namespace App\Http\Controllers;
use App\Post;
use App\User;
use App\Comment;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    //
    public function __construct(){
    $this->middleware('auth');
    }
    public function index($id){

        $posts = Post::latest()->where('course_id', $id)
            ->filter(request(['month','year']))
            ->get();
        return $posts;
    }

    public function posts($id){
        
        $posts = Post::latest()->where('id', $id)
            ->get();
        return $posts;
    }
    public function comment($id){
        
        $comm = Comment::latest()->where('post_id', $id)
            ->get();
        return $comm;
    }

    public function store($id){
        //dd(request()->all());
        $this->validate(request(),[
            'title'=>'required',
            'body'=> 'required'
        ]);
        $post = new Post;
        $post->user_id=auth()->id();
        $post->course_id=$id;
        $post->title = request('title');
        $post->body = request('body');

        $post->save();
        return response($post, 201);
    }
    public function addComment($id){
        $this->validate(request(),[
            'body'=>'required'
        ]);
        $post = new Comment();
        $post->body = request('body');
        $post->user_id=auth()->id();
        $post->post_id=$id;


        $post->save();
        return response($post, 201);
    }
}
