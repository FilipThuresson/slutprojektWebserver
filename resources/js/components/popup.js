import React, {useState, useEffect} from 'react';

export default function Popup({visable, setpVisable, eventData, setEvents}) {

    const [show, setShow] = useState(visable);
    

    useEffect(()=>{
        setShow(visable);
    }, [visable])

    const handleClose = () =>{
        setShow(false);
        setpVisable(false);
    }
    const handleSubmit = (e) =>{
        e.preventdefault();
        //console.log(e);
        const event = {
            id: 20, // You must use a custom id generator
            title: 'Reserverat!',
            start: eventData.startStr,
            end: eventData.endStr,
            color: 'orange',
            allDay: false,
        }
        setEvents(oldEvents=>[...oldEvents, event]);
        setShow(false);
    }
    if(show){
        return (
            <div className='popUpWrapper'>
                <div className='popupDiv'>
                    <form onSubmit={handleSubmit}>
                        <button onClick={handleClose}>X</button>
                        <h2>Boka Tid</h2>
                        <input type='text' placeholder='Namn' name='fullName' required/>
                        <br/>
                        <input type='text' placeholder='000-000-00-00' name='phoneNr' required/>
                        <br/>
                        <input type='Email' placeholder='Email' name='email' required   />
                        <br />
                        <button type='submit'>Reservera</button>
                    </form>
                </div>
            </div>
        );
    }else{
        return null;
    }
}
