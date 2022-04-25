let event;
fetch('/api/getEvents').then(res=>res.json())
.then(data=>{
    event = data; 
});

export default event;