<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Files;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Approved;
class ApprovedController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function approvedLetters()
    {
        $l = 1;
        $letters = Files::latest()
            ->where('from', Auth::user()->name)
            ->orWhere('approved', $l)
            ->get();
        return response($letters, 201);
    }
}
