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

Route::get('/', [ViewController::class, 'index']);

Route::get('/bookings', [ViewController::class, 'bookings']);

Route::get('/admin', [ViewController::class, 'admin']);

Route::get('/logout', function(){
    Session::flush();
    return redirect('/');
});


