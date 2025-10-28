async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = document.getElementById("keyInput").value; // Take key from user input

  if (!city || !apiKey) {
    alert("Please enter both city name and API key");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod == "404") {
    document.getElementById("weatherInfo").innerHTML = "City not found!";
    return;
  }

  document.getElementById("weatherInfo").innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>☁️ ${data.weather[0].description}</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
  `;
}
