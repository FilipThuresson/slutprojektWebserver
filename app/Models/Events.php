<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Events extends Model
{
    public function getAll(){
        return DB::table('events')->get();
    }
    public function addEvent($event){
        return DB::table('events')->insert($event);
    }
}
