async function getInfo(){
    const  stopId = document.getElementById('stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;

    const res  =  await fetch(url);
    const data = await res.json();
    console.log(data);
}
