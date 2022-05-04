import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';
import DayGridPlugin from "@fullcalendar/daygrid";
import svLocale from '@fullcalendar/core/locales/sv';
import interactionPlugin from '@fullcalendar/interaction';
import Popup from './popup';
import AdminPopup from './adminPopup';


export default function AdminCalendar(){


    const [events, setEvents] = useState([]);
    const [pVisable, setpVisable] = useState(false);
    const [ApVisable, setApVisable] = useState(false);
    const [reload, setReload] = useState(0);

    const [eventData, setEventData] = useState();
    const [eventInfo, setEventInfo] = useState();

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
                setEvents([]);
                response.data.forEach(event=>{
                    setEvents(oldEvents=>[...oldEvents, event]);
                });
            }
        });
    },[reload])

    const handleDayClick = (e) =>{
        //SKAPA popup där användare matar in telefonnr, email fulla namn
        //Lagra i databasen som reserverad admin senare godkänner när betalning kommer in
        setEventData(e);
        setpVisable(true);

    }

    const handleEventClick = (e) =>{
        setEventInfo(e.event._def);
        setApVisable(true);
    }

    return (
        <>
        <h1>Admin Kalender</h1>
        <div className="calendar-wrapper">
            <Popup visable={pVisable} setpVisable={setpVisable} eventData={eventData} setEvents={setEvents}/>
            <AdminPopup reloadEvents={setReload}visable={ApVisable} setpVisable={setApVisable} eventInfo={eventInfo}/>

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
                validRange={{
                    'start':today
                }}
                eventClick={handleEventClick}
            />
        </div>
        </>
    )
}
