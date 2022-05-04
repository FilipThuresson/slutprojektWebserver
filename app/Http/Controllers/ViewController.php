<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class ViewController extends Controller
{
    public function index()
    {
        return view('home');
    }
    public function bookings()
    {
        return view('bookings');
    }
    public function admin()
    {
        if(Session::get('isAdmin')){
            return view('admin');
        }else{
            return view('login');
        }
    }
}
