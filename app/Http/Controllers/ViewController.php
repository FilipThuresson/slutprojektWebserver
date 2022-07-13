<?php

namespace App\Http\Controllers;

use App\Models\InfoText;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Polyfill\Intl\Idn\Info;

class ViewController extends Controller
{

    //Retunerar olika views för varje url
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

    public function getInfoText() {
        return DB::table('infotext')->where('id', '=', 1)->get();
    }
    public function setInfoText() {
        $text = Request::json('text');
        if(DB::table('infoText')->where('id', '=', 1)->update(['text' => $text])){
            return DB::table('infotext')->where('id', '=', 1)->get();
        }else{
            return false;
        }
    }
}
