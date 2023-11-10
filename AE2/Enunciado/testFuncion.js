// Constantes y variables y tal
const baseUrl = 'https://rickandmortyapi.com/api/';
// Constante para la card original
let card = document.getElementsByClassName('card')[0];
// Constante para el contenedor
const container = document.getElementsByClassName('grid-container')[0];
// Endpoint para obtener información de un personaje. Debo inicializarlo porque sino explota
let characterId = 0;
// Limite para recorrer cards
let limite = 3;
// Variable con el boton de mostrar más
let botones = Array.from(document.getElementsByTagName('button'));
// Variable boton ampliar
let botonesAmpliar = Array.from(document.getElementsByClassName('botonera'));


// Realizar una solicitud HTTP a la API
const fetchCharacterInfo = async (characterId) => {
    let characterEndpoint = `character/${characterId}`;
    let url = baseUrl + characterEndpoint;

    // Realizar una solicitud HTTP a la API
    try {
        const response = await fetch(url);
        if (response.ok) {
            let responseData = await response.json();
            return responseData;
        }
    } catch (error) {
        console.error('Hubo un error al hacer la solicitud a la API: ' + error);
    }

}

const printCards = async (limite) => {
    // Esta igual es reutilizable si le meto otra variable para el tope y me saca 3 o 20 según
    for (let i = 1; i <= limite; i++) {
        let character = await fetchCharacterInfo(i);
        // Clona la card original
        let nuevaCard = card.cloneNode(true);
        // Me cargo la vacía
        card.remove();
        // Variable elemento foto
        let cardImg = nuevaCard.querySelector('.item-0');
        cardImg.style.backgroundImage = 'url(' + character.image + ')';
        container.appendChild(nuevaCard);
        // Textos
        let cardGender = nuevaCard.querySelector('.item-1');
        cardGender.innerHTML = character.gender;
        let cardSpecies = nuevaCard.querySelector('.item-2');
        cardSpecies.innerHTML = character.species;
        let cardName = nuevaCard.querySelector('.item-3');
        cardName.innerHTML = character.name;
        let cardStatus = nuevaCard.querySelector('.item-4');
        cardStatus.innerHTML = character.status;
    }
}

const removeCards = function (){
    let cards = document.getElementsByClassName('card');
    while (cards.length > 0) {
        cards[0].remove();
    }
}

const ponerClick = function (){
    //removeCards();
    botones[0].addEventListener('click', function() {
        removeCards();
        limite = 20;
        printCards(limite);
    })
}

const ponerAmpliar = function(){
    botonesAmpliar.map(element => addEventListener('click', function(){
        //Aquí la modal
    }))
}

printCards(limite);
ponerClick();
console.log(botones);
