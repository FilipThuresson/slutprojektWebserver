import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import LoginForm from './loginForm';


export default function Login() {
    return (<>
        <Nav />
        <LoginForm />
    </>);
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}

