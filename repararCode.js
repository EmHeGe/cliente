
const fetchCharacterInfo = async (characterId) => {
    let characterEndpoint = `character/${characterId}`;
    let url = baseUrl + characterEndpoint;
  
    // Realizar una solicitud HTTP a la API
    try {
        
      const response = await fetch(url);
      if (response.ok) {
        let responseData = response.json();
        return responseData;
      }
    } catch (error) {
        console.error('Hubo un error al hacer la solicitud a la API: ' + error);
    }
    
  }
  