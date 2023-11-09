// Constantes y variables y tal
const baseUrl = 'https://rickandmortyapi.com/api/';
const contenedor = document.body;
// Constante para la card original
let card = document.getElementsByClassName('card')[0];
// Constante para el contenedor
const container = document.getElementsByClassName('grid-container')[0];
// Endpoint para obtener información de un personaje. Debo inicializarlo porque sino explota
let characterId = 0;


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

const printCards = async () => {
    // Esta igual es reutilizable si le meto otra variable para el tope y me saca 3 o 20 según
    for (let i = 1; i <= 3; i++) {
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
    }
}

printCards();