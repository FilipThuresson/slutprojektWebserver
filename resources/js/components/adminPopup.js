import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

export default function AdminPopup({reloadEvents, visable, setpVisable, eventInfo}) {

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
                reloadEvents(2);
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
