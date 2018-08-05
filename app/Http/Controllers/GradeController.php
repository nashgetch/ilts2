<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Enrollment;
use App\Grade;
use App\User;
use Illuminate\Support\Facades\Auth;
class GradeController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function index($id){
     $grade = Grade::latest()
         ->where([
            ['course_id', $id],
            ['user_id', Auth::user()->id]
         ])
         ->get();
        return $grade;
    }
    public function enrolledSt($id){
        $enroll = Enrollment::latest()
                ->where('course_id', $id)
                ->get();
        if(count($enroll) == 0){
            $f[] = null;
        }
        foreach ($enroll as $inter) {
            $f[] = User::latest()
            ->where('id', '=', $inter->user_id)
            ->get();
        }
        
        return $f;
    }
}
