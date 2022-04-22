import React, {useState, useRef} from 'react';
import Images from './sliderImages';

export default function ImageSlider() {

    const imageSliderDiv = useRef(null)

    const [current, setCurrent] = useState(1);

    setInterval(()=>{
        nextImage();
    },5000);

    const nextImage = () => {
        if(current >= Images.length){
            setCurrent(1);
            imageSliderDiv.current.style.left = "0%";
        }else{
            setCurrent(current + 1);
            imageSliderDiv.current.style.left = (current * -100) + "%";
        }
    }

    return (
        <div className='image-slider-wrapper'>
            <div ref={imageSliderDiv} className='image-slider' style={{left: 0}}>
                {Images.map(img=>{
                    return <img className='image-slider-img' key={img.id} src={img.url} />
                })}
            </div>
            <div id="image-indicator">
                <input type='radio' disabled></input>
                <input type='radio' disabled></input>
            </div>
        </div>
    );
}

