let apiKey = "7e709654e061c0a9e96019499e8137a4";
let cityInp = "Ghaziabad";

const weatherIcon = document.querySelector(".weather-icon");

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
apiUrl= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name + `, ${data.sys.country}`;
    document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + " °C";
    document.querySelector(".humidityText").innerHTML = data.main.humidity + " %";
    document.querySelector(".windText").innerHTML = String(data.wind.speed) + " km/h";
    
    console.log(data);

    if(data.weather[0].main == 'Clouds'){
      weatherIcon.src = "images/clouds.png";
    }
    
    else if(data.weather[0].main == 'Clear'){
      weatherIcon.src = "images/clear.png";
    }

    else if(data.weather[0].main == 'Rain'){
      weatherIcon.src = "images/rain.png";
    }
    
    else if(data.weather[0].main == 'Drizzle'){
      weatherIcon.src = "images/drizzle.png";
    }

    else if(data.weather[0].main == 'Mist'){
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }

}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener('click', ()=>{
  checkWeather(searchBox.value);
})