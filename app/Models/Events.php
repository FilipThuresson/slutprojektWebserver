<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Events extends Model
{
    public static function getAll(){
        return DB::table('events')->get(); //Hämtar alla events
    }
    public static function addEvent($event){
        return DB::table('events')->insert($event); //laddar upp nytt event
    }
    public static function deleteOne($id){
        return DB::table('events')->delete($id); //tar bort ett event
    }
    public static function reserveExisting($id) //ändrar till reserverad på ett existerande event
    {
        return DB::table('events')
        ->where('id', '=', $id)
        ->update([
            'title' => 'Reserverad Tid',
            'color' => 'orange'
        ]);
    }
    public static function bookExisting($id) //ändrar till Bokad på ett existerande event
    {
        return DB::table('events')
        ->where('id', '=', $id)
        ->update([
            'title' => 'Bokad Tid',
            'color' => 'red'
        ]);
    }
}
