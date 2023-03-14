var forecast = document.querySelector ("#weatherTable");
var fetchBtn = document.querySelector ("#btn");
var lastCity = document.querySelector ("#preCity");


var getWeather = function(city) {
    var APIkey = "195afc894ee5fa544eb826395ad34cb5"
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIkey;
    var grabUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey;
//    var url = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=' +APIkey;
//    var tracker = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},1&limit=5&appid={API key}';
// console.log(grabUrl)
    fetch(grabUrl)
   
      .then(function(response) {
        return response.json();
    })
 
      .then(function(data) {
        displayWeather(data);
       
         console.log(data);
});

var displayWeather = function (data){         
             var weatherRow = document.querySelector("#weatherTable");
            weatherRow.innerHTML=data;
        }};

 function displayStorage () {
   
    var city = localStorage.getItem("city");

    lastCity.textContent = city;
       for(var i=0; i<city.length; i++) {
        var cities = city[i];

        var li = document.createElement("li");
        li.textContent =cities;
        li.setAttribute("data-index",i);

        lastCity.appendChild("li");
                 
}
};

fetchBtn.addEventListener('click',function(event) {
  event.preventDefault();

        var city = document.querySelector("#city").value;
    
getWeather(city);
      
        localStorage.setItem("city",city);
        displayStorage();
    });

    



