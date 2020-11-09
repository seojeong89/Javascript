const weather = document.querySelector(".weather");
const API = "504ef396c976be6b244e73d7be785935";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const name = json.name;
      const temp = json.main.temp;

      weather.innerText = `${temp}도 ${name}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem("coords", JSON.stringify(coords));
}

function geoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coords = {
    latitude,
    longitude,
  };

  saveCoords(coords);

  getWeather(latitude, longitude);
}

function geoError() {
  console.log("위치 정보를 허용하지 않았습니다.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem("coords");
  askCoords();
}

function init() {
  loadCoords();
}

init();
