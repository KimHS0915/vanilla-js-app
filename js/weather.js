const weatherKeyForm = document.querySelector("#weather-key");
const weatherKeyInput = document.querySelector("#weather-key input");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const apiKey = localStorage.getItem("api-key");

const getWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp}°C`;
      city.innerText = data.name;
    });
};

const onGeoSucces = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  sessionStorage.setItem("lat", lat);
  sessionStorage.setItem("lon", lon);
  getWeather(lat, lon);
};

const onGeoError = () => {
  alert("Error. Can't find your position");
};

const getPosition = () => {
  const lat = sessionStorage.getItem("lat");
  const lon = sessionStorage.getItem("lon");
  if (lat && lon) {
    getWeather(lat, lon);
  } else {
    navigator.geolocation.getCurrentPosition(onGeoSucces, onGeoError);
  }
};

if (apiKey) {
  weatherKeyForm.classList.add("hidden");
  getPosition();
}

const saveApiKey = (event) => {
  const apiKey = weatherKeyInput.value;
  localStorage.setItem("api-key", apiKey);
};

weatherKeyForm.addEventListener("submit", saveApiKey);
