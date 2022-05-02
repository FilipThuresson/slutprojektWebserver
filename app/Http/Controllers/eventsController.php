<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Support\Facades\Request;


class eventsController extends Controller
{
    public function getEvents(){
        $events = Events::getAll();
        return $events;
    }

    public function uploadEvents(){
        $data = Request::all();

        Events::addEvent($data);
        return $data;
    }
}
