<?php

use App\Http\Controllers\eventsController;
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

Route::get('/getEvents', [eventsController::class, 'getEvents']);

Route::post('/upload/event', [eventsController::class, 'uploadEvents']);
