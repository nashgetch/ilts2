<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Enrollment;
use App\User;
use App\Course;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class EnrollmentController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function index(){
        $e = Enrollment::latest()
        ->where('user_id', Auth::user()->id)
        ->get();
        if(count($e) == 0){
            $f[] = null;
        }
        foreach ($e as $inter) {
            $f[] = Course::latest()
            ->where('id', '=', $inter->course_id)
            ->get();
        }
       
        return $f;
    }
    public function store($id){
        $enroll = new Enrollment();
        $enroll->course_id = $id;
        $enroll->user_id = Auth::user()->id;
        $com = Enrollment::latest()
        ->where('course_id', '=', $id)
        ->where('user_id', Auth::user()->id)
        ->get();
        if (count($com) > 0) {
            return response('already enrolled in this course.', 201);     
        } 
        $enroll->save();
        return response($com, 201);
    }
}
