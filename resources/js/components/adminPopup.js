import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

export default function AdminPopup({reloadEvents, reload, visable, setpVisable, eventInfo}) { //En popup för att ändra olika bokningar till reserverad, bokad och betal eller ta bort den
    //Fungerar som andra popupen men olika innehål
    const [show, setShow] = useState(visable);

    useEffect(()=>{
        setShow(visable);
        console.log(eventInfo);
    }, [visable])

    const handleClose = () =>{
        setShow(false);
        setpVisable(false);
    }
    const handleSubmit = (e) =>{
        //Vid submit hämtar det man vill uppdatera den till och skickar det till servern
        e.preventDefault();

        let update = {
            id: eventInfo.publicId,
            changeTo :e.target.select.value
        }

        axios({
            method: 'post',
            url: '/api/update/event',
            data: update
        }).then(function(response){
            if(!response.data){
                alert("Något gick fel");
            }else{
                reloadEvents(reload + 1);
                setShow(false);
                setpVisable(false);
            }
        });
    }
    if(show){
        return (
            <div className='popUpWrapper'>
                <div className='popupDiv'>
                    <form onSubmit={handleSubmit}>
                        <button type="button" onClick={handleClose}>X</button>
                        <br />
                        <p>Uppdatera bokining för <br /> Namn: {eventInfo.extendedProps.name} <br />Telefon: {eventInfo.extendedProps.phoneNr} <br /></p>
                        <label>Uppdatera Status</label>
                        <br />
                        <select name="select">
                            <option value="booked">Ändra Till Bokad</option>
                            <option value="reserve">Ändra Till Reserverad</option>
                            <option value="remove">Ta bort</option>
                        </select>
                        <br />
                        <button type="submit">Spara</button>
                    </form>
                </div>
            </div>
        );
    }else{
        return null;
    }
}
