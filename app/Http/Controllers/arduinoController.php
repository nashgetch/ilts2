<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Code;
class arduinoController extends Controller
{
    public function index(Request $request){
     
       $code = $request->input('code');
       
       //dd($post);
        $filename2 = 'nash.js';
        File::put($filename2,$code);
        $command = 'node'.' '.$filename2;
        exec($command, $output);
        
        return $output;
    }
    public function exit(){
        exec('exit');
        return response('Arduino Stopped!', 201);
    }
}
