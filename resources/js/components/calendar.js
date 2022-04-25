import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import DayGridPlugin from "@fullcalendar/daygrid";
import svLocale from '@fullcalendar/core/locales/sv';


export default function Calendar(){


    const [events, setEvents] = useState([]);

    useEffect(()=>{
        
        fetch('/api/getEvents').then(res=>res.json())
        .then(data=>{
            console.log(data);
            /*let newEvents = defualtEvents;
            data.forEach(event => {
                newEvents.push(event);
            });
            console.log(newEvents);
            setEvents(newEvents)*/

        });
    },[])
    
    const handleEventClick = (e) =>{
    }
    return (
        <div className="calendar-wrapper">
            <FullCalendar 
                plugins={[timeGridPlugin, DayGridPlugin]}
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
                eventClick={handleEventClick}
                headerToolbar={{
                    left: 'dayGridMonth timeGridWeek',
                    center: 'title',
                    right: 'today prev next'
                }}
        />
        </div>
    )
}