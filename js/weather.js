const API_KEY = "0968881c6bf194bd3eea98a40d82c7c9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const icon = document.querySelector(".weatherImg");
            const city = document.querySelector("#weather .city");
            const weather = document.querySelector("#weather .weather");
            const iconImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            icon.setAttribute('src', iconImg)
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}, ${Math.round(data.main.temp)}°`;

        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);