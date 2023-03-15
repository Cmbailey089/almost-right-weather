var forecast = document.querySelector ("#weatherTable");
var fetchBtn = document.querySelector ("#btn");
var lastCity = document.querySelector ("#preCity");



function getWeather(city) {
  var APIkey = "195afc894ee5fa544eb826395ad34cb5";
  // var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIkey;
  var grabUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey;

 
  fetch(grabUrl)

    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      displayWeather(data);

      console.log(data);
    });

  var displayWeather = function (data) {
    console.log(data.list[0]);
    console.log(data.list[0].main.humidity);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].wind.speed);
    var weatherRow = document.querySelector("#weatherTable");

    for (var i = 0; i < data.list.length; i++) {

      if (i === 0 || i % 8 === 0) {
        var hum = document.createElement("div");
        var temp = document.createElement("div");
        var wind = document.createElement("div");
        var sunIcon = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
        var imgEl = document.createElement("img");
        imgEl.src = sunIcon;


        var forecast = document.createElement("div");
        forecast.id = ("forCard");


        hum.innerHTML += "Humidity=" + data.list[i].main.humidity;
        temp.innerHTML += "temperture=" + data.list[i].main.temp;
        wind.innerHTML += "wind=" + data.list[i].wind.speed;
        forecast.appendChild(hum);
        forecast.appendChild(temp);
        forecast.appendChild(wind);
        forecast.appendChild(imgEl);
        weatherRow.appendChild(forecast);



      }
    }
  };
}

 function displayStorage () {
   
    var city = JSON.parse(localStorage.getItem("city"));

    
       for(var i=0; i<city.length; i++) {
        
        var cities = city[i];

        var li = document.createElement("button");
        li.innerHTML =cities;
        li.setAttribute("data-index",i);
        
        lastCity.appendChild(li);
       
                 
}};

fetchBtn.addEventListener('click',function(event) {
  event.preventDefault();

        var city = document.querySelector("#city").value;
   
getWeather(city);
        
        console.log(cityNames)
        var cityNames = JSON.parse(localStorage.getItem("city"))||[];
        cityNames.push(city);
// if (cityNames.indexOf(city)==-1){
//           cityNames.push(city);
        
        localStorage.setItem("city",JSON.stringify(cityNames));
        displayStorage();        
   } );

