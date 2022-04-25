import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import DayGridPlugin from "@fullcalendar/daygrid";
import svLocale from '@fullcalendar/core/locales/sv';
import interactionPlugin from '@fullcalendar/interaction';
import Popup from './popup';


export default function Calendar(){


    const [events, setEvents] = useState([]);
    const [pVisable, setpVisable] = useState(false);


    useEffect(()=>{
        //hämtar alla data vid första inladdning av sidan
        //fetch('/api/getEvents').then(res=>res.json())
        //.then(data=>{
        //    console.log(data);
            /*let newEvents = defualtEvents;
            data.forEach(event => {
                newEvents.push(event);
            });
            console.log(newEvents);
            setEvents(newEvents)*/

        //});
    },[])

    const handleDayClick = (e) =>{
        //SKAPA popup där användare matar in telefonnr, email fulla namn
        //Lagra i databasen som reserverad admin senare godkänner när betalning kommer in
        const event = {
            id: 20, // You must use a custom id generator
            title: 'Reserverat!',
            start: e.startStr,
            end: e.endStr,
            color: 'orange',
            allDay: false,
            description: 'Lecture'
          }
        setEvents(oldEvents=>[...oldEvents, event]);

    }
    return (
        <div className="calendar-wrapper">
            <Popup visable={pVisable} />
            <FullCalendar
                plugins={[timeGridPlugin, DayGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                aspectRatio={1}
                slotDuration={'02:00:00'}
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
            />
        </div>
    )
}
