const container=document.querySelector(".container");
const search=document.querySelector(".search-box button");
const weatherBox=document.querySelector(".weather-box");
const weatherDetails=document.querySelector(".weather-details");

search.addEventListener("click",()=>{
  console.log("hello");
  const APIKey = "88cf6206d65219ea243d36a5d73a6e47";
  const city =document.querySelector(".search-box input").value;
  if(city== "")
    return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={APIkey}`).then(response => response.json()).then(json => {
    const image= document.querySelector(".weather-box img");
    const temperature= document.querySelector(".weather-box .temperature");
    const description= document.querySelector(".weather-box .description");
    const humidity= document.querySelector(".weather-box .humidity span");
    const wind= document.querySelector(".weather-box .wind span");
    switch (json.weather[0].main){
      case "Clear":
        image.src= "https://www.pngitem.com/pimgs/m/9-99892_simple-weather-icons-sunny-sunny-weather-icon-png.png";
      case "Rain":
        image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Weather-rain-thunderstorm.svg/1839px-Weather-rain-thunderstorm.svg.png";
      case "Snow":
        image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Weather-snow.svg/1200px-Weather-snow.svg.png";
      case "clouds":
        image.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/2048px-Weather-few-clouds.svg.png";
      case "Mist":
        image.src="https://cdn.images.express.co.uk/img/dynamic/153/590x/secondary/UK-weather-1362975.jpg?r=1534891019826";
      default:
        image.src="https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/203811660_partly-mostly-cloudy-clouds_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d";
    }


  })
})
