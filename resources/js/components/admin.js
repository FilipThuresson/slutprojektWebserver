import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import AdminCalendar from './adminCalendar';
import AddUserAdmin from './addUserAdmin';


//Viewn för admin sidan ifall man är inloggad

export default function Admin() {
    return (<>
        <Nav />
        <AdminCalendar />
        <AddUserAdmin />
    </>);
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}

