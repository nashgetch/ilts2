<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Course;
use App\User;
use Illuminate\Support\Facades\DB;
use Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Auth;
class CourseCreateController extends Controller
{
    public function index(){
        $dept = Course::latest()->get();
        return $dept;
    }
    public function courseView($id)
    {
        $course = Course::find($id);
        return $course;
    }
    public function store(Request $request){

        $post = new Course();
        $post->course_name = request('course_name');
        $post->belongs_to_dept = request('belongs_to_dept');
        $post->no_of_modules = request('no_of_modules');
        $post->desc = request('desc');
        $post->save();
        return response($post, 201);
    }
    public function add(){
    }
}
