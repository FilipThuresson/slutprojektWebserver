import React, { useState, useEffect } from "react";

export default function InfoText() {
    const [info, setInfo] = useState('');

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
                setInfo(response.data[0].text );
            }
        });
    },[]);

    return (
      <>
        <div className="infoTextWrapper">
            <h2>Info:</h2>
            <div dangerouslySetInnerHTML={{ __html: info }} />
        </div>
      </>
    );
  }
