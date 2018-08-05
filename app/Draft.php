<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Draft extends Model
{
    protected $fillable = [
        'to_email',
        'letter_header',
        'letter_desc',
        'filename'
    ];
    public function getCreatedAtAttribute($value){
        return Carbon::createFromFormat('Y-m-d H:i:s', $value)->diffForHumans();
    }
}
