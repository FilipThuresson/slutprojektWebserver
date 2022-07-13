<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\eventsController;
use App\Http\Controllers\ViewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/getEvents', [eventsController::class, 'getEvents']); //kör functionen getEvents i eventsController

Route::get('/getInfoText',  [ViewController::class, 'getInfoText']);

Route::post('/setInfoText',  [ViewController::class, 'setInfoText']);


Route::post('/upload/event', [eventsController::class, 'uploadEvents']); // ------||------

Route::post('/update/event', [eventsController::class, 'update']); // ------||------


Route::post('/login', [AdminController::class, 'login']); // ------||------

Route::post('/register', [AdminController::class, 'register']); // ------||------

