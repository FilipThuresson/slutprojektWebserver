import React, {useState} from 'react';

export default function ImageSlider() {

    const imgPath = 'img/slider/';
    const [current, setCurrent] = useState(1);

    return (
        <div className='image-slider'>
            <img className='image-slider-img'src={imgPath + current + '.jpg'}></img>
        </div>
    );
}

