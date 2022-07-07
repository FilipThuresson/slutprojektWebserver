import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import DayGridPlugin from "@fullcalendar/daygrid";
import svLocale from '@fullcalendar/core/locales/sv';
import interactionPlugin from '@fullcalendar/interaction';
import Popup from './popup';

export default function Calendar(){


    const [events, setEvents] = useState([]);
    const [cost, setCost] = useState(0);

    const [pVisable, setpVisable] = useState(false);
    const [eventData, setEventData] = useState();
    const today = new Date().toISOString().slice(0,10);


    useEffect(()=>{
        //hämtar alla data vid första inladdning av sidan
        axios({
            method: 'get',
            url: '/api/getEvents',
        }).then(function(response){
            if(response.data == null){
                alert("Error försök igen");
            }else{
                response.data.forEach(event=>{
                    setEvents(oldEvents=>[...oldEvents, event]);
                });
            }
        });
    },[])

    const handleDayClick = (e) =>{
        //SKAPA popup där användare matar in telefonnr, email fulla namn
        //Lagra i databasen som reserverad admin senare godkänner när betalning kommer in

        const diffInMs = Math.abs(e.end - e.start);
        let diff =  diffInMs / (1000 * 60 * 60);
        // Kolla om man har valt minst 2 timmar!
        if(diff < 2){
            alert('Du måste välja minst 2 timmar!');
        }else{
            setCost(100*diff);
            setEventData(e);
            setpVisable(true);
        }
    }

    return (

        <div className="calendar-wrapper">
            <Popup cost={cost} visable={pVisable} setpVisable={setpVisable} eventData={eventData} setEvents={setEvents}/> {/*Visning av popup fönster*/}
            {/* Calendar ramverket och alla inställningar */}
            <FullCalendar
                plugins={[timeGridPlugin, DayGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                aspectRatio={1}
                slotDuration={'01:00:00'}
                firstDay={1}
                locale={svLocale}
                height="75vh"
                expandRows={true}
                eventOverlap={false}
                slotMinTime={"10:00:00"}
                events={events}
                selectable={true}
                select={handleDayClick}
                headerToolbar={{
                    left: 'dayGridMonth timeGridWeek',
                    center: 'title',
                    right: 'today prev next'
                }}
                weekNumbers={true}
                editable={false}
                selectOverlap={false}
                handleWindowResize={true}
                validRange={{
                    'start':today
                }}
                allDaySlot={false}
                longPressDelay={200}
            />
        </div>
    )
}
