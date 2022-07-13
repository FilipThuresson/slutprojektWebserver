import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function ChangeHomeText() {
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(1);

    useEffect(()=>{
        //hämtar alla data vid första inladdning av sidan
        axios({
            method: 'get',
            url: '/api/getInfoText',
        }).then(function(response){
            if(!response.data){
                alert("Error försök igen");
            }else{
                console.log(response.data);
                setValue(response.data[0].text );
            }
        });
    },[update]);

    const homeTextChange = () => {
        axios({
            method: 'post',
            url: '/api/setInfoText',
            data: {
                'text' : value
            }
        }).then(function(response){
            if(response.data == null){
                alert("Error försök igen");
            }else{
                setUpdate(update + 1);
                alert("Uppdaterat!");
            }
        });
    }

  return (
    <>
        <div className="wrapperClassName">
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </div>
        <button onClick={homeTextChange}>Spara</button>
    </>
  );
}
