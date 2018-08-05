<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Ankitjain28may\HackerEarth\Facades\HackerEarth;
use Ankitjain28may\HackerEarth\Models\Output;
use Illuminate\Support\Facades\File;

class CppController extends Controller
{
   
    public function index(Request $request){

        $code = $request->input('code');
        $x = rand(1, 280);
        $class_name="nash".$x;
        $filename = $class_name.'.cpp';
        $filename2 = preg_replace('/\s+/', '', $filename);
        // dd($filename2);
        File::put($filename2,$code);
        $compile_command = 'g++ -o'.' '.$class_name.' '. $filename2;
        $run_command = './'. $class_name;
        exec($compile_command);
        exec($run_command, $output);
        return $output;
        

    }

}
