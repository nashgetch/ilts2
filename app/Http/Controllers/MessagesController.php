<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Message;
class MessagesController extends Controller
{
    public function getAll(){
        $chat = Message::latest()->get();
        return $chat;
    }
}
