var forecast = document.querySelector ("#weatherTable");
var fetchBtn = document.querySelector ("#btn");
var lastCity = document.querySelector ("#preCity");


var getWeather = function(city) {
    // console.log(city)
    var APIkey = "195afc894ee5fa544eb826395ad34cb5"
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
        // console.log(data)
// console.log(data.list[0])
        

           

            // var weatherRow = document.createElement('wr');
            // var weatherData = document.createElement('wd');
            // var link = document.createElement('a');

            // link.textContent = data[i].html_url;
            // link.href = data[i].html_url;

            // weatherData.appendChild(link);
            // weatherRow.appendChild(weatherData);
            // forecast.appendChild(weatherRow);
         
});

var displayWeather = function (data){         
             var weatherRow = document.querySelector("#weatherTable");
            weatherRow.innerHTML=data;
        }};

 function displayStorage () {
   
    var city = localStorage.getItem("city");

    lastCity.textContent = city;
//        for(var i=0; i<city.length; i++) {
//         city.appendChild("#preCity");

// }
};

fetchBtn.addEventListener('click',function(event) {
  event.preventDefault();

        var city = document.querySelector("#city").value;
    
getWeather(city);
        // var name = $(this).parent().attr("id")
// console.log(city)
        localStorage.setItem("city",city);
        displayStorage();
    });

  

// var displayStorage = function(city) {
//         for(i=0; i < city; i++) {
//             (".input").val(localStorage.getItem(".input"))

//             var pastSelections = document.getElementById('#preCity');
//             pastSelections.innerHTML=city
            
//         }
//     }

