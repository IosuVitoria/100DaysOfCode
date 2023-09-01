const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');
let previousCity = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === "" || nameCountry.value === "") {
        showError("Ambos campos son obligatorios...");
        return;
    }

    const city = nameCity.value;
    const country = nameCountry.value;

    if (city !== previousCity) {
        clearHTML();
        previousCity = city;
        callAPI(city, country);
    } else {
        showError("Ya has buscado esta ciudad.");
    }
});

function callAPI(city, country) {
    const apiId = "7f356ff517e14bdba0d05c5b80a2721b";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(response => response.json())
        .then(dataJSON => {
            if (dataJSON.cod === "404") {
                showError("Ciudad no encontrada.");
            } else {
                showWeather(dataJSON);
                console.log(dataJSON);
            }
        })
        .catch(error => {
            showError("Error al obtener datos del pronóstico.");
        });
}

function showWeather(data) {
    const { name, main: { temp, temp_min, temp_max, feels_like, humidity }, weather: [arr], sys:{sunrise, sunset} } = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);
    const feel = kelvinToCentigrade(feels_like);

    //Manejar los datos de salida del sol y puesta para convertirlos en fechas legibles para usuario.

    const sunriseTime = new Date(sunrise * 1000); 
    const sunriseHours = sunriseTime.getHours();
    const sunriseMinutes = sunriseTime.getMinutes();

    const sunsetTime = new Date(sunset * 1000); 
    const sunsetTimeHours = sunsetTime.getHours();
    const sunsetTimeMinutes = sunsetTime.getMinutes();

    const content = document.createElement('div');
    content.innerHTML = `
        <div class="primary-data">
            <h5>Clima en ${name}</h5>
            <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
            <h2>${degrees}ºC</h2>
            <h4>Humedad ambiental: ${humidity}%</h4>
            <h4>Sensación térmica: ${feel}ºC</h2>
        </div>
        <div class="other-data">
            <p><b>Otros datos de interés:</b></p>
            <p>Max: ${max}ºC</p>
            <p>Min: ${min}ºC</p>
            <p>Amanece ${sunriseHours}:${sunriseMinutes} AM</p>
            <p>Anochece ${sunsetTimeHours}:${sunsetTimeMinutes} PM</p>
        </div>
     `;
    result.appendChild(content);
}

function showError(message) {
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.textContent = message;

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function kelvinToCentigrade(temp) {
    return parseInt(temp - 273.15);
}

function clearHTML() {
    result.innerHTML = '';
}
