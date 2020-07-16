const URL = "http://localhost:8000";

axios.get(URL + "/heroes")
.then(heroes => displayAll(heroes.data))
.catch(err => console.error(err));

function displayAll(heroes){
    const all = document.getElementById("all");

    heroes.forEach(heroe => {
        all.innerHTML += `
        <li>${heroe.name}</li>
        <button class="details" data-id="${heroe.id}">details</button>
        
        `;
    });

    const button = document.querySelector(".details")
    
    button.onclick = () => openModale(heroe.id);
    
}


function openModale(){
    const modale = createElement("div");
    
}



