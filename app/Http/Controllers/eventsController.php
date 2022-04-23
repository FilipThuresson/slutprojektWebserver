<?php

namespace App\Http\Controllers;

use App\Models\Events;

class eventsController extends Controller
{
    public function getEvents(){
        $events = Events::getAll();
        return $events;
    }
}
