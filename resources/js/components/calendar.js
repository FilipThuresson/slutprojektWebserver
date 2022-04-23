import React, {useRef, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import svLocale from '@fullcalendar/core/locales/sv';


export default function Calendar(){

    const FullCalendarRef = useRef(null);
    useEffect(()=>{
        fetch('/api/getEvents').then(res=>res.json())
        .then(data=>{
            console.log(data);
            FullCalendarRef.current.events = data
        })
    },[])
    
    return (
        <div className="calendar-wrapper">
            <FullCalendar 
                ref={FullCalendarRef}
                plugins={[timeGridPlugin]}
                initialView="timeGridWeek"
                aspectRatio={1}
                slotDuration={'02:00:00'}
                firstDay={1}
                locale={svLocale}
                expandRows={true}
                height="70vh"
                slotMinTime={"10:00:00"}

        />
        </div>
    )
}