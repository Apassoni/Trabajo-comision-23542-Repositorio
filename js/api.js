const apiKey = "7850e667612bca42d6fd22c055ee27c8";
//const city = 'Jujuy';
const city2 = "Ushuaia";
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function consultarTemperatura(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperatura = data.main.temp;

      document.getElementById("temperatura").textContent = `${temperatura} °C`;
    })
    .catch((error) => {
      console.error("Error al consultar la temperatura:", error);
    });
}



// Programar actualización cada 15 minutos (900000 ms)
setInterval(consultarTemperatura, 900000);

document.addEventListener("DOMContentLoaded",()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const ciudad = urlParams.get("ciudad")
    consultarTemperatura(ciudad);

})