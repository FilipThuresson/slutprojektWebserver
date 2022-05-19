import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Calendar from './calendar';

//Viewn för calender man alla bokningar

export default function Bookings() {
    return (<>
        <Nav />
        <Calendar />
    </>);
}

if (document.getElementById('bookings')) {
    ReactDOM.render(<Bookings />, document.getElementById('bookings')); //Körs om bookings diven finns i html
}
