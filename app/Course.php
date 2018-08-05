<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Course extends Model
{
    protected $fillable = ['name', 'dept', 'modules', 'desc'];
    public function user(){
        return $this->hasMany(User::class);
    }
    public function getCreatedAtAttribute($value){
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }
}
