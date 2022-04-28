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
    const [eventData, setEventData] = useState();



    useEffect(()=>{
        //hämtar alla data vid första inladdning av sidan

    },[])

    const handleDayClick = (e) =>{
        //SKAPA popup där användare matar in telefonnr, email fulla namn
        //Lagra i databasen som reserverad admin senare godkänner när betalning kommer in
        setEventData(e);
        setpVisable(true);

    }
    return (
        <div className="calendar-wrapper">
            <Popup visable={pVisable} setpVisable={setpVisable} eventData={eventData} setEvents={setEvents}/>
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
                handleWindowResize={true}
            />
        </div>
    )
}