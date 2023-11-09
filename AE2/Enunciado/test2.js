function createCharacterCard(character) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    const image = document.createElement('img');
    image.src = character.image; // La URL de la imagen del personaje
    thumbnail.appendChild(image);
  
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
  
    const name = document.createElement('h3');
    name.textContent = character.name;
    const status = document.createElement('p');
    status.textContent = `Status: ${character.status}`;
    const species = document.createElement('p');
    species.textContent = `Species: ${character.species}`;
  
    // Agregar elementos al pie de la tarjeta
    cardFooter.appendChild(name);
    cardFooter.appendChild(status);
    cardFooter.appendChild(species);
  
    // Agregar elementos a la tarjeta
    card.appendChild(thumbnail);
    card.appendChild(cardFooter);
  
    return card;
  }
  
  // Función para mostrar los personajes en la página
  function displayCharacters(characterData) {
    const gridContainer = document.querySelector('.grid-container');
  
    characterData.forEach(character => {
      const card = createCharacterCard(character);
      gridContainer.appendChild(card);
    });
  }
  
  // Realizar una solicitud HTTP para obtener información de los personajes
  const baseUrl = 'https://rickandmortyapi.com/api/';
  const charactersEndpoint = 'character/';
  
  fetch(baseUrl + charactersEndpoint)
    .then(response => response.json())
    .then(data => {
      const characters = data.results; // La lista de personajes
  
      // Mostrar los personajes en la página
      displayCharacters(characters);
    })
    .catch(error => {
      console.error('Hubo un error al hacer la solicitud a la API: ' + error);
    });