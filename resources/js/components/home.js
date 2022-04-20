import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import ImageSlider from './ImageSlider';

export default function Home() {
    return (<>
        <Nav />
        <ImageSlider />
    </>);
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
