const URL = "http://localhost:8000";

axios.get(URL + "/heroes")
    .then(heroes => displayAll(heroes.data))
    .catch(err => console.error(err));

function displayAll(heroes) {
    const all = document.getElementById("all");



    heroes.forEach(heroe => {
        all.innerHTML += `
        <li>${heroe.name}</li>
        <button class="details" data-id="${heroe.id}">details</button>
        
        `;
    });

    const button = document.querySelector(".details")

    button.onclick = (evt) => {
        openModale(evt)
    };

}


function openModale(evt) {
    console.log ("freferfregfr")
    const id = evt.target.getAttribute("data-id")
    console.log(id)
    const modale = createElement("div");
    modale.classList.add("modale");
    modale.innerHTML = `
   <img src= "${heroe.image.url}">
     <ul>
        <li>${heroe.name}</li>
        <li>${heroe.appearance.gender}</li>
     </ul>

    `;

}