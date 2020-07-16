const URL = "http://localhost:8000";
var listHeroes = null;
axios.get(URL + "/heroes")
    .then(heroes => displayAll(heroes.data))
    .catch(err => console.error(err));




function displayAll(heroes) {
    console.log(heroes)
    const all = document.getElementById("all");
    listHeroes = heroes


    heroes.forEach((heroe, index) => {
        if (index < 6) {
            all.innerHTML += `
        <li>${heroe.name}</li>
        <button class="details" data-id="${heroe.id}">Details</button>
        <button class="supprimer" data-id="${heroe.id}> Supprimer</button>
        
        `;
        }

    });

    const buttons = document.querySelectorAll(".details");

    buttons.forEach(button => {
        button.onclick = openModale
    })

    const buttonsDelete = document.querySelectorAll(".supprimer");

    buttonsDelete.forEach(button => {
        button.onclick = suppimerHeroe
    })
console.log(buttonsDelete)

}



function suppimerHeroe (evt){
    const id = evt.target.getAttribute("data-id")
    axios.delete(URL + "/" + id) 
    .then()
    .catch(error => console.error(error))
}

function openModale(evt) {

    const id = evt.target.getAttribute("data-id");
    const heroe = listHeroes.find(heroe => heroe.id == id);
    const modale = document.createElement("div");
    modale.classList.add("modale");
    console.log("freofjoirejf")
    const body = document.querySelector("body");
    body.appendChild(modale)
    modale.innerHTML = `
    <div>
        <img id="image" src= "${heroe.image.url}">
        <ul>
            <li><p>Name : </p>  ${heroe.name} ${heroe.biography["full-name"]}</li>
            <li><p>Gender : </p> ${heroe.appearance.gender}</li>
            <li><p>Combats : </p> ${heroe.powerstats.combat}</li>
            <li><p>Alignement : </p> ${heroe.biography.alignment}</li>
            <li><p>Race : </p> ${heroe.appearance.race}</li>
            <li><p>Publisher : </p> ${heroe.biography.publisher}</li>
        </ul>
     </div>
    `;


}