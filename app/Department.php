<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Department extends Model
{
    protected $fillable = ['name', 'desc'];
    public function user(){
        return $this->hasMany(User::class);
    }
    public function getCreatedAtAttribute($value){
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }
}
