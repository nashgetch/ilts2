<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
class Message extends Model
{
    protected $table = 'messsages';
    protected $fillable = array('body');
    public function user(){
        return $this->belongsTo('User', 'user_id');
    }
}
