import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';

export default function Admin() {
    return (<>
        <Nav />
    </>);
}

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}

