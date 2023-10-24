
const search=document.querySelector(".search-box button");
const error404=document.querySelector(".not-found");
const container=document.querySelector(".container");
const weatherBox= document.querySelector(".weather-box");
const weatherDetails= document.querySelector(".weather-details");
search.addEventListener("click", () => {
  const cityInput = document.querySelector(".search-box input");
  const city = cityInput.value.toLowerCase();

  if (city === "") {
    return;
  }

  const selectedCountry = {
    france: {
      description: 'Sunny',
      humidity: 40,
      temperature: 25,
      image: 'https://www.pngitem.com/pimgs/m/9-99892_simple-weather-icons-sunny-sunny-weather-icon-png.png'
    },
    morocco: {
      description: 'Cloudy',
      humidity: 50,
      temperature: 30,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Weather-rain-thunderstorm.svg/1839px-Weather-rain-thunderstorm.svg.png'
    },
    tokyo: {
      description: 'Snow',
      humidity: 5,
      temperature: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/1200px-Weather-snow.svg.png'
    }
  };

  if (!selectedCountry.hasOwnProperty(city)) {
    container.style.height="400px";
    weatherBox.classList.remove("active");
    weatherDetails.classList.remove("active");
    error404.classList.add("active");
  } else {
    container.style.height="555px";
    weatherBox.classList.add("active");
    weatherDetails.classList.add("active");
    error404.classList.remove("active");
  }
  const image = document.querySelector(".weather-box img");
  const temperature = document.querySelector(".weather-box .temperature");
  const description = document.querySelector(".weather-box .description");
  const humidity = document.querySelector(".weather-box .humidity span");

  if (selectedCountry[city]) {
    image.src = selectedCountry[city].image;
    temperature.innerHTML = `${selectedCountry[city].temperature}<span>°C<span>`;
    description.innerHTML = selectedCountry[city].description;
    humidity.innerHTML = `${selectedCountry[city].humidity}%`;
  }
});
