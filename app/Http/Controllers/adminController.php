<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function login(){
        $username = Request::post('name');
        $password = Request::post('pwd');

        $user = User::login($username, $password);

        if(count($user) > 1 || count($user) < 1){
            return 'error no user';
        }else{
            if(Hash::check($password, $user[0]->password)){
                Session::put('isAdmin', true);
                return back();
            }else{
                return "error wrong password";
            }
        }
   }
}
