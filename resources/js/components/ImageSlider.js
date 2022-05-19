import React, {useState, useRef, useEffect} from 'react';
import Images from './sliderImages';

export default function ImageSlider() {

    const imageSliderDiv = useRef(null);

    const imageOne = useRef(null); //Skapar referenser till JSX taggar (HTML fast För javascript/React), ungeför som getElementById();
    const imageTwo = useRef(null);

    const [current, setCurrent] = useState(1); //Om vilken bild där är på.

    const [paused, setPaused] = useState(false); //om automatiska image slidningen är på eller inte

    useEffect(()=>{
        if(!paused){
            setTimeout(()=>{
                nextImage(); //Vid förändring av current och ifall automatiska slidningen är på vänta 2sekunder och sen kör setImage
                             //Eftersom nextImage() kommer ändra current kommer funktionen köras om till den är pausad
            }, 2000);
        }
    }, [current])

    const nextImage = () => { //Funktionen för att ändra bild
        if(current >= Images.length){ //Ifall vi är på sista bilden kör detta
            setCurrent(1); //ändra till första bilden
            imageSliderDiv.current.style.left = "0%"; //Ändra css för att visa första bilden
            //hämta knapparna för att visa vilken bild man är på
            const button = imageOne.current;
            const otherButton = imageTwo.current;
            //Samt ändra vilken som är aktiv
            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';
        }else{ //Om man inte är på sista bilden kör detta
            setCurrent(current + 1);
            console.log(current);
            imageSliderDiv.current.style.left = (current * -100) + "%";  //Ändra css för att visa nästa bilden
            //hämta knapparna för att visa vilken bild man är på
            const button = imageTwo.current;
            const otherButton = imageOne.current;
            //Samt ändra vilken som är aktiv
            button.className = 'image-indicator-div active';
            otherButton.className = 'image-indicator-div';
        }
    }

    function setImage(image){
        //Om man själv klickar på knapparna för att ändra bild körs denna
        //koden är liknade över men hårdkodad för just 2 bilder,
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

