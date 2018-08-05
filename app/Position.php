<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Position extends Model
{
    protected $fillable = ['p_name', 'd_name', 'isHead'];
    public function user(){
        return $this->hasMany(User::class);
    }
    public function department(){
        return $this->belongsTo(Department::class);
    }
    public function getCreatedAtAttribute($value){
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }
}
