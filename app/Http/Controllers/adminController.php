<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class AdminController extends Controller
{
    public function login(){ //försöker kolla om man kan logga in som admin
        $username = Request::post('name');
        $password = Request::post('pwd');

        $user = User::login($username, $password); //Kör funktionen login i user model

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

   public function register(){ //Skapar ny admin
       if(!Session::get('isAdmin')){
           return 401;
       }
       $username = Request::post('username');
       $password = Hash::make(Request::post('password'));

       $success = User::register($username, $password); //Kör funktionen register i user model

       return $success;

   }
}
