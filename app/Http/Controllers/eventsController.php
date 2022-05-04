<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class eventsController extends Controller
{
    public function getEvents(){
        $events = Events::getAll();
        return $events;
    }

    public function uploadEvents(){
        $data = Request::all();

        if(Events::addEvent($data)){
            return $data;
        }else{
            return "error";
        }
    }
    public function update(){
        if(!Session::get('isAdmin')){
            return 401;
        }
        $data =  Request::all();
        switch ($data['changeTo']) {
            case 'remove':
                return Events::deleteOne($data['id']);
                break;
            case 'reserve':
                return Events::reserveExisting($data['id']);
                break;
            case 'booked':
                return Events::bookExisting($data['id']);
                break;
            default:
                # code...
                break;
        }
        return $data;
    }
}
