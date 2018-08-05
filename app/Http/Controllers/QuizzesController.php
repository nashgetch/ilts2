<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Course;
use App\User;
use App\Quiz;
use Illuminate\Support\Facades\DB;
use Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Auth;
class QuizzesController extends Controller
{
    public function index($course_name, $chapter_no)
    {
        $quiz = Quiz::latest()
          ->where([
              ['course_name', $course_name],
              ['chapter_no', $chapter_no],
           ])
          ->get();
        return $quiz;
    }
    public function store(Request $request){

        $quiz = new Quiz();
        $quiz->course_name = request('course_name');
        $quiz->chapter_no = request('chapter_no');
        $quiz->qType = request('qType');
        $quiz->c1 = request('c1');
        $quiz->c2 = request('c2');
        $quiz->c3 = request('c3');
        $quiz->question = request('question');
        $quiz->ans = request('ans');
        $quiz->save();
        return response($quiz, 201);
    }
    public function checkAnswer($id){
      
      $quiz = Quiz::find($id);
      $ans = request('code');
      //dd($ans);
      if(strtolower($ans) == strtolower($quiz->ans)){
        $quiz->complete = 1;
        $quiz->save();
        return response('correct', 201);
      }
      return response('Try Again', 201);
      
    }
}
