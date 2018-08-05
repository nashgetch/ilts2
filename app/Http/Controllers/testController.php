<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class testController extends Controller
{
    public function store(Request $request){
        print_r($request->all());
    }
}
