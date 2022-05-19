import React, {useEffect, useState} from "react";

export default function AddUserAdmin(){
//Funktion för att skapa ny admin användare av för existerad admin!
    const handleSubmit = (e) =>{
        e.preventDefault();

        let data = {
            username: e.target.usrName.value,
            password: e.target.psw.value
        }

        axios({
            method: 'post',
            url: '/api/register',
            data: data
        }).then(function(response){
            console.log(response);
            if(response.data){
                alert("Användare skapad!");
            }else{
                alert("Error försök igen");
            }
        });
    }

    return (
        <>
            <form className="adminNewUsr" onSubmit={handleSubmit}>
                        <br />
                        <p>Skapa Ny Admin Användare</p>
                        <br />
                        <label>Användar namn</label>
                        <br />
                        <input name="usrName" required placeholder="Användarnamn" />
                        <br />
                        <label>Lösenord</label>
                        <br />
                        <input name="psw" required placeholder="Lösenord" type="password"/>
                        <br />
                        <button type="submit">Spara</button>
            </form>
        </>
    )
}
