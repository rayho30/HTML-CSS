const apiKey = "be6eef1d09b6a3a592cd91aefad9bb56";

function getWeather() {
  const city = document.getElementById("city").value.trim();
  const weatherDiv = document.getElementById("weather");

  if (city === "") {
    weatherDiv.innerHTML = "Please enter a city";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {

    
      if (data.cod != 200) {
        weatherDiv.innerHTML = data.message;
        return;
      }

      weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁ Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(() => {
      weatherDiv.innerHTML = "Network error ";
    });
}
