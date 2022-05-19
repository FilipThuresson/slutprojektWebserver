<?php

use App\Http\Controllers\ViewController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ViewController::class, 'index']); //kör functionen index i Viewcontroller

Route::get('/bookings', [ViewController::class, 'bookings']); //kör functionen bookings i Viewcontroller

Route::get('/admin', [ViewController::class, 'admin']); //kör functionen admin i Viewcontroller


Route::get('/logout', function(){ //tar bort session infon samt rederectar tillbaka till startsidan
    Session::flush();
    return redirect('/');
});


