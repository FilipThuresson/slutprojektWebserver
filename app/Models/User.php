<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class User extends Model
{
    public static function login($username, $password)
    {
        $user = DB::table('admins')->where('username','=',$username)->get();
        return $user;
    }
}
