import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Popup({visable, setpVisable, eventData, setEvents}) {

    const [show, setShow] = useState(visable);

    const resInfo = JSON.parse(localStorage.getItem('resInfo'));

    useEffect(()=>{
        setShow(visable);
    }, [visable])

    const handleClose = () =>{
        setShow(false);
        setpVisable(false);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(e.target.saveInfo.value){
            localStorage.setItem('resInfo', JSON.stringify({
                name: e.target.fullName.value,
                email: e.target.email.value,
                phoneNr: e.target.phoneNr.value,
            }));
        }
        const event = {
            id: uuidv4(),
            title: 'Reserverat!',
            start: eventData.startStr,
            end: eventData.endStr,
            color: 'orange',
            allDay: false,
            email: e.target.email.value,
            phoneNr: e.target.phoneNr.value,
            name: e.target.fullName.value
        }

        axios({
            method: 'post',
            url: '/api/upload/event',
            data: event
        }).then(function(response){
            if(response.data == null){
                alert("Error försök igen");
            }else{
                setEvents(oldEvents=>[...oldEvents, event]);
            }
        });
        setShow(false);
        setpVisable(false);
    }
    if(show){
        return (
            <div className='popUpWrapper'>
                <div className='popupDiv'>
                    <form onSubmit={handleSubmit}>
                        <button type="button" onClick={handleClose}>X</button>
                        <h2>Boka Tid</h2>
                        {resInfo ? <input type='text' placeholder='Namn' name='fullName' defaultValue={resInfo.name} required/> : <input type='text' placeholder='Namn' name='fullName' required/>}
                        <br/>
                        {resInfo ? <input type='text' placeholder="Telefon" name='phoneNr' defaultValue={resInfo.phoneNr} required/> : <input type='text' placeholder="Telefon" name='phoneNr' required/>}
                        <br/>
                        {resInfo ? <input type='Email' placeholder='Email' name='email' defaultValue={resInfo.email} required   /> : <input type='Email' placeholder='Email' name='email' required   />}
                        <br />
                        <div>
                            <p><input name="saveInfo" type="checkbox"/>Spara information i webbläsaren</p>
                        </div>
                        <button type='submit'>Reservera</button>
                    </form>
                </div>
            </div>
        );
    }else{
        return null;
    }
}
