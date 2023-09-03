// API KEY: c80835a466fe431d8760e43f373e39fd - Ejemplo de newsAPI;
const apiKey = "c80835a466fe431d8760e43f373e39fd";

const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Realizar una solicitud GET a la API
fetch(apiUrl)
  .then((response) => {
    // Verificar si la respuesta es exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Verificar si hay noticias disponibles
    if (data.totalResults > 0) {
      // Iterar a través de las noticias y mostrar el título y la descripción por consola
      data.articles.forEach((article, index) => {
        console.log(`Noticia ${index + 1}:`);
        console.log('Título:', article.title);
        console.log('Descripción:', article.description);
        console.log('Fuente:', article.source.name);
        console.log('URL:', article.url);
        console.log('-'.repeat(50)); // Separador entre noticias
      });
    } else {
      console.log('No se encontraron noticias.');
    }
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });