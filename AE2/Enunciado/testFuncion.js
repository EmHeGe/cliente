const baseUrl = 'https://rickandmortyapi.com/api/';

// Endpoint para obtener información de un personaje (por ejemplo, el personaje con ID 1)
let characterId = 1;
let characterEndpoint = `character/${characterId}`;

// Variable para la card
let card = document.getElementsByClassName('item-0');

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



for (let i = 1; i <= 3; i++) {
    let caca = fetchCharacterInfo(i);
    console.log(caca);
}

/* fetchCharacterInfo(1);
card.style.backgroundImage = 'url(' + card.image; */
console.log(card[0]);
/* setTimeout(console.log(testPj),
   3000); */
