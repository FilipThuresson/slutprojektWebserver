<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class User extends Model
{
    public static function login($username, $password) //Hämta användare från databasen med användarnamnet
    {
        $user = DB::table('admins')->where('username','=',$username)->get();
        return $user;
    }
    public static function register($username, $password) //Lagrar ny användare
    {
        $user = DB::table('admins')->insert(['username' => $username, 'password' => $password]);
        return $user;

    }
}
