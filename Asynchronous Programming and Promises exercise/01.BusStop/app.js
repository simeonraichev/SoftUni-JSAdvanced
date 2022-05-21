async function getInfo(){
    const stopId = document.getElementById('stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    const stopNameEl = document.getElementById('stopName');
    const timetableEl = document.getElementById('buses');


    
    try{
        stopNameEl.textContent = "Loading...";
        timetableEl.replaceChildren();
        const res  =  await fetch(url);
        if(res.status != 200){
            // alert('Stop id not found!')
            throw new Error("Stop id not found");
        }
        const data = await res.json();
        stopNameEl.textContent = data.name;
        console.log(data);
        Object.entries(data.buses).forEach(b=>{
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives is ${b[1]} minutes`;
            timetableEl.appendChild(liElement);
        })
    }catch(error){
        stopNameEl.textContent = "Stop ID not found!"

    }
}
