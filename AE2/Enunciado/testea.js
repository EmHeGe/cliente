const baseUrl = 'https://rickandmortyapi.com/api/';

// Endpoint para obtener información de un personaje (por ejemplo, el personaje con ID 1)
let characterId = 1;
let characterEndpoint = `character/${characterId}`;

// Realizar una solicitud HTTP a la API
function fetchCharacterInfo(characterId) {
  let characterEndpoint = `character/${characterId}`;
  let url = baseUrl + characterEndpoint;

  // Realizar una solicitud HTTP a la API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar los datos de la respuesta de la API
      console.log(data);
    })
    .catch(error => {
      console.error('Hubo un error al hacer la solicitud a la API: ' + error);
    });
}

for (let i = 1; i <= 3; i++) {
  fetchCharacterInfo(i);
}