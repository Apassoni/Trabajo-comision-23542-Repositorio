
// Reemplaza 'TU_API_KEY' con tu clave API de OpenWeatherMap
//const apiKey = '7850e667612bca42d6fd22c055ee27c8';
//const city = 'Jujuy';

// URL de la API de OpenWeatherMap
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Realizar la solicitud a la API
//fetch(apiUrl)
//    .then(response => response.json())
//    .then(data => {
        // Actualizar la información en la página
//        document.getElementById('temperature').textContent = data.main.temp;
//        document.getElementById('weather').textContent = data.weather[0].description;
//    })
//    .catch(error => console.error('Error:', error));


const apiKey = '7850e667612bca42d6fd22c055ee27c8';
const city = 'Jujuy';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


function consultarTemperatura() {
    fetch(url)  
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            document.getElementById('temperatura').textContent = `${temperatura} °C`;
        })
        .catch(error => {
            console.error('Error al consultar la temperatura:', error);
        });
}

// Consultar la temperatura inicialmente
consultarTemperatura();

// Programar actualización cada 1 minuto (60000 ms)
setInterval(consultarTemperatura, 60000);
