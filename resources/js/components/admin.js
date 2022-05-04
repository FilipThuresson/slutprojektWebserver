import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import AdminCalendar from './adminCalendar';

export default function Admin() {
    return (<>
        <Nav />
        <AdminCalendar />
    </>);
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}

