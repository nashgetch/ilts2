<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Department;
use App\Position;
use App\User;
use Illuminate\Support\Facades\Validator;
class PositionsController extends Controller
{
    public function index(){
        $pos = Position::latest()->get();
        return $pos;
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'd_name' => 'required|min:2',
            'p_name' => 'required|min:2',
        ]);
        if($validator->fails()){
            return response($validator->errors()->all(), 422);
        }
        $pos = new Position();
        $pos->d_name = request('d_name');
        $pos->p_name = request('p_name');
        if(request('isHead') == true){
            $pos->isHead = 1;
        }
        else {
            $pos->isHead = 0;
        }
        $pos->save();
        return response($pos, 201);
    }
}
