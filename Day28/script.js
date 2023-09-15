const imageApiUrl = 'https://source.unsplash.com/random';  

function getRandomJoke() {
  const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    return data.type === 'single' ? data.joke : `${data.setup} ${data.delivery}`;
  });
}

function getRandomImage() {
  return fetch(imageApiUrl)
    .then(response => response.url);
}

function getRandomJokeAndImage() {
    Promise.all([getRandomJoke(), getRandomImage()])
      .then(([joke, imageUrl]) => {
        const jokeText = document.getElementById('joke-text');
        const randomImage = document.getElementById('random-image');
        const body = document.body;
  
        jokeText.textContent = joke;
        randomImage.src = imageUrl;
  
       
        body.style.backgroundImage = `url('${imageUrl}')`;
      })
      .catch(error => console.error('Error al obtener broma e imagen:', error));
  }
