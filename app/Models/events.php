<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Events extends Model
{
    public static function getAll(){
        return DB::table('events')->get();
    }
}
