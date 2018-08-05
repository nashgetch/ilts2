<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Department;
use App\User;
use Illuminate\Support\Facades\Validator;
class DepartmentsController extends Controller
{
    public function index(){
        $dept = Department::latest()->get();
        return $dept;
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'dept_name' => 'required|min:2',
            'dept_desc' => 'required|min:2',
        ]);
        if($validator->fails()){
            return response($validator->errors()->all(), 422);
        }

        $post = new Department();
        $post->dept_name = request('dept_name');
        $post->dept_desc = request('dept_desc');
        $post->save();
        return response($post, 201);
    }
}
