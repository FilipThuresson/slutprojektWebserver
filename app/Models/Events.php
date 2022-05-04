<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Events extends Model
{
    public static function getAll(){
        return DB::table('events')->get();
    }
    public static function addEvent($event){
        return DB::table('events')->insert($event);
    }
    public static function deleteOne($id){
        return DB::table('events')->delete($id);
    }
    public static function reserveExisting($id)
    {
        return DB::table('events')
        ->where('id', '=', $id)
        ->update([
            'title' => 'Reserverad Tid',
            'color' => 'orange'
        ]);
    }
    public static function bookExisting($id)
    {
        return DB::table('events')
        ->where('id', '=', $id)
        ->update([
            'title' => 'Bokad Tid',
            'color' => 'red'
        ]);
    }
}
