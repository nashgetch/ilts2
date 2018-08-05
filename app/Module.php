<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Module extends Model
{
    protected $fillable = ['chapter_name', 'filename1', 'filename2', 'desc'];
    public function user(){
        return $this->hasMany(User::class);
    }
//    public function getCreatedAtAttribute($value){
//        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
//    }
}
