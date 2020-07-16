const URL = "http://localhost:8000";
var listHeroes = null;
axios.get(URL + "/heroes?_sort=views&_order=asc")
    .then(heroes => displayAll(heroes.data))
    .catch(err => console.error(err));




function displayAll(heroes) {
    const all = document.getElementById("all");
    listHeroes = heroes
    all.innerHTML = "";
    // console.log("JE SIS LA    ",
    //     heroes.sort(function(a, b) {
    //     return b.id - a.id;
    // }))
    heroes.forEach((heroe, index) => {
        if (index < 21) {
            all.innerHTML += `
        <div data-u-id="${heroe.id}" class="card">
        <p>${heroe.name}</p>
        <figure><img src="${heroe.image.url}"></figure>
        <button class="details" data-id="${heroe.id}">Details</button>
        <button class="supprimer" data-id="${heroe.id}">Delete</button>
        <button class="edit" data-id="${heroe.id}">Edit</button>
        </div>
        `;
        }
        // 

    });

    const buttons = document.querySelectorAll(".details");

    buttons.forEach(button => {
        button.onclick = openModale
    })

    const buttonsDelete = document.querySelectorAll(".supprimer");

    buttonsDelete.forEach(button => {
        button.onclick = suppimerHeroe
    })


    
    const buttonsEdit = document.querySelectorAll(".edit");

    buttonsEdit.forEach(button => {
        button.onclick = editrHeroe
    })



}


function suppimerHeroe (evt){
    const id = evt.target.getAttribute("data-id");
    console.log(URL + "/heroes/" + id)
    axios.delete(URL + "/heroes/" + id) 
    .then(res => {
        displayAll(listHeroes)
        removeUserFromDocument(id);
    })
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


function editrHeroe(evt){
    const id = evt.target.getAttribute("data-id");
}

const createButton = document.getElementById("create").onclick = modaleCreateHeroe;
function modaleCreateHeroe(){
    
    const modale = document.createElement("div");
    modale.classList.add("modaleCreate");
    const body = document.querySelector("body");
    body.appendChild(modale)
    modale.innerHTML = `
    <input id="name" type="text" name="name" placeholder="name">
    <input  id="fullname" type="text" name="full-name" placeholder="Full Name">
    <input  id="gender" type="text" name="gender" placeholder="Gender">
    <input  id="combat" type="text" name="combat" placeholder="Combat">
    <input  id="alignment" type="text" name="alignment" placeholder="Alignement">
    <input  id="race" type="text" name="race" placeholder="Race">
    <input  id="publisher" type="text" name="publisher" placeholder="Publisher">
    <button id="valider" name="valider">créer</button>
    `;

    const valider = document.getElementById("valider");
    valider.onclick = createHeroe;

}
function createHeroe(evt){
   const name = document.getElementById("name").value
   const fullName = document.getElementById("fullname").value
   const gender = document.getElementById("gender").value
   const combat = document.getElementById("combat").value
   const alignment = document.getElementById("alignment").value
   const race = document.getElementById("race").value
   const publisher = document.getElementById("publisher").value
   console.log(name, " ", fullName, " ", gender, " ", combat, " ", alignment, " ", race, " ", publisher)
    
   axios.post(URL + "/heroes/", { 
        name,
        fullName,
        gender,
        combat,
        alignment,
        race,
        publisher
    })
    .then()
    .catch(err => console.error(err))
   
}
function removeUserFromDocument(idUser) {
    // https://developer.mozilla.org/fr/docs/Web/CSS/S%C3%A9lecteurs_d_attribut
    const cardToRemove = document.querySelector(`[data-u-id="${idUser}"]`);
    cardToRemove.remove();
  }