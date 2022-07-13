import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import ImageSlider from './ImageSlider';
import InfoText from './infoText';

//Viewn för homepage skapad av react


export default function Home() {
    return (<>
        <Nav />
        <ImageSlider />
        <InfoText />
    </>);
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home')); //Körs om diven home finns i htmlkoden
}
