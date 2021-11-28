const API_KEY = "69708fb3651ad0abfa9a5a5e638f1919";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json()
        .then((data) => {
            const weather = document.querySelector("#weather-box span#weather-value");
            const city = document.querySelector("#weather-box span#city-value");
            const temp = document.querySelector("#weather-box span#temp-value");

            weather.innerText = `\"${data.weather[0].main}\"`;
            city.innerText = `\"${data.name}\"`;
            temp.innerText = `\"${data.main.temp}℃\"`;
        }));
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);