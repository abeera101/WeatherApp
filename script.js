const apiKey = "147ce45b3959e8c0a88ff16ca8a64fe1";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".sre");
const weatherIcon = document.querySelector(".wimage img");

async function weatherCheck(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);
  if (response === 404){
    
    document.querySelector(".mainweather").style.display= "block";

  }
  else {
  const data = await response.json();
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".degree").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".humidity").innerHTML = ` ${data.main.humidity}% `;
  document.querySelector(".wind").innerHTML = ` ${data.wind.speed} m/s`;

  // Debugging: Log the weather condition
  console.log("Weather condition:", data.weather[0].main);

  // Convert to lowercase for comparison
  const weatherCondition = data.weather[0].main.toLowerCase();

  // Update image (ensure images exist in the same folder or use "images/")
  if (weatherCondition === "clouds") {
    weatherIcon.src = "clouds.png";
  } else if (weatherCondition === "mist") {
    weatherIcon.src = "mist.png";
  } else if (weatherCondition === "rain") {
    weatherIcon.src = "rain.png";
  } else if (weatherCondition === "snow") {
    weatherIcon.src = "snow.png";
  } else if (weatherCondition === "drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (weatherCondition === "clear") {
    weatherIcon.src = "clear.png";
  } else {
    weatherIcon.src = "default.png"; // Fallback image
  }
  document.querySelector(".mainWeather").style.display= "block";
  document.querySelector(".error").style.display= "none";
}
}

// Move the event listener outside
searchBtn.addEventListener("click", () => {
  weatherCheck(searchBox.value);
});
