<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Post extends Model
{
    public function scopeFilter($query, $filters){
        if($month = $filters['month']){
            $this->whereMonth('created_at',Carbon::parse($month)->month);
        }
        if($year = $filters['year']){
            $this->whereYear('created_at',$year);
        }
    }
    public static function archives(){
    return static::selectRaw('year (created_at) year, monthname(created_at) month, count(*) published')
        ->groupBy('month','year')
        ->orderByRaw('min(created_at)')
        ->get()
        ->toArray();
    }
}
