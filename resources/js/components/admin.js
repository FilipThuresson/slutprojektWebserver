import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import AdminCalendar from './adminCalendar';
import AddUserAdmin from './addUserAdmin';
import ChangeHomeText from './changeHomeText';



//Viewn för admin sidan ifall man är inloggad

export default function Admin() {
    return (<>
        <Nav />
        <AdminCalendar />
        <AddUserAdmin />
        <ChangeHomeText />
    </>);
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}

