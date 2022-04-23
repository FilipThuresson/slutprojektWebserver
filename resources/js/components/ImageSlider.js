import React, {useState, useRef, useEffect} from 'react';
import Images from './sliderImages';

export default function ImageSlider() {

    const imageSliderDiv = useRef(null);

    const imageOne = useRef(null);
    const imageTwo = useRef(null);

    const [current, setCurrent] = useState(1);
    
    const [paused, setPaused] = useState(false);

    useEffect(()=>{
        if(!paused){
            setTimeout(()=>{
                nextImage();
            }, 5000);
        }
    }, [current])

    const nextImage = () => {
        if(current >= Images.length){
            setCurrent(1);
            imageSliderDiv.current.style.left = "0%";
            const button = imageOne.current;
            const otherButton = imageTwo.current;

            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';
        }else{
            setCurrent(current + 1);
            console.log(current);
            imageSliderDiv.current.style.left = (current * -100) + "%";
            
            const button = imageTwo.current;
            const otherButton = imageOne.current;

            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';
        }
    }

    function setImage(image){
        imageSliderDiv.current.style.left = (image * -100) + "%";
        setPaused(true);
        if(image == 0){
            const button = imageOne.current;
            const otherButton = imageTwo.current;

            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';

        }else if(image == 1){
            const button = imageTwo.current;
            const otherButton = imageOne.current;

            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';
        }
    }

    return (
        <div className='image-slider-wrapper'>
            <div ref={imageSliderDiv} className='image-slider' style={{left: 0}}>
                {Images.map(img=>{
                    return <img className='image-slider-img' key={img.id} src={img.url} />
                })}
            </div>
            <div className="image-indicator">
                <div ref={imageOne} onClick={()=>setImage(0)} className='image-indicator-div active'></div>
                <div ref={imageTwo} onClick={()=>setImage(1)} className='image-indicator-div'></div>
            </div>
        </div>
    );
}

