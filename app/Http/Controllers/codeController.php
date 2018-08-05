<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Ankitjain28may\HackerEarth\Facades\HackerEarth;
use Ankitjain28may\HackerEarth\Models\Output;
use Illuminate\Support\Facades\File;

class codeController extends Controller
{
    public function index(Request $request){
        $code = $request->input('code');
        $arr = explode('class', $code);
        $class = $arr[1];
       
        $n = explode("{", $class, 2);
        $class_name = $n[0];
        $filename = $class_name.'.java';
        $filename2 = preg_replace('/\s+/', '', $filename);
        // dd($filename2);
        File::put($filename2,$code);
        $compile_command = 'javac'.' '. $filename2;
        $run_command = 'java'.' '. $class_name;
        exec($compile_command);
        exec($run_command, $output);
        return $output;
        

    }
}
