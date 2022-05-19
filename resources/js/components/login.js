import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import LoginForm from './loginForm';

//Viewn för login page skapad av react

export default function Login() {
    return (<>
        <Nav />
        <LoginForm />
    </>);
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login')); //Ifall en divtagg med id login finns rendera den här komponenten
}

