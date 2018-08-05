<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Mail\Welcome;
class RegisterController extends Controller
{
//    //
//    public function create(){
//      return view('Registration.register');
//    }
    public function store(){

    $user = User::create(request(['name','email','password']));
        auth()->login($user);
//    \Mail::to($user)->send(new Welcome($user));
        return response($user, 201);
    }

    public function destroy(){
        auth()->logout();
        return 'Logged Out!';
    }
    
}
