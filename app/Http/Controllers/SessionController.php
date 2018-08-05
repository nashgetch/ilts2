<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
class SessionController extends Controller
{
    public function store(Request $request){
        $remember = 1;
        $credentials = [
        'email' => $request->input('email'),
        'password' => $request->input('password')
        ];
        if(auth::attempt($credentials, $remember)) {
            return response(Auth::user(),201);
        }
        return response('Username or Password Incorrect',403);
            
    }
}
