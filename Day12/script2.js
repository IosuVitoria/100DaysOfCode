// API key de Google news: b585213474cd5da3aeb7c09665ce2f91;
// API key de Google news: b585213474cd5da3aeb7c09665ce2f91;
const apiKey = 'b585213474cd5da3aeb7c09665ce2f91';
const apiUrl = 'https://gnews.io/api/v4/search?q=example&lang=en&country=en&max=100&apikey=' + apiKey;

const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let articles = [];

// Función para cargar las noticias
function loadNews() {
    newsContainer.innerHTML = '';

    articles.forEach(function (article) {
        // Código para crear y mostrar las tarjetas de noticias
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        const title = document.createElement('h3');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const content = document.createElement('p');
        content.textContent = article.content;

        const image = document.createElement('img');
        image.src = article.image;
        image.alt = article.title;
        image.classList.add('bw-image');

        const publishedAt = document.createElement('p');
        publishedAt.textContent = 'Published on ' + new Date(article.publishedAt).toLocaleString();

        newsCard.appendChild(title);
        newsCard.appendChild(description);
        newsCard.appendChild(content);
        newsCard.appendChild(image);
        newsCard.appendChild(publishedAt);

        newsContainer.appendChild(newsCard);
    });
}

// Función para realizar una búsqueda de noticias
function searchNews(query) {
    const searchUrl = `${apiUrl}&q=${query}`;

    fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            articles = data.articles;
            loadNews();
        })
        .catch(function (error) {
            console.error('Error al buscar noticias:', error);
        });
}

// Evento para buscar noticias al hacer clic en el botón de búsqueda
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        searchNews(searchTerm);
    }
});

// Cargar noticias iniciales al cargar la página
fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        articles = data.articles;
        loadNews();
    })
    .catch(function (error) {
        console.error('Error al cargar noticias:', error);
    });
