var forecast = document.getElementById ("weatherTable");
var fetchBtn = document.getElementById ("btn");

var getWeather = function(city) {
    console.log(city)
    var APIkey = "195afc894ee5fa544eb826395ad34cb5"
    var grabUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey;
   
console.log(grabUrl)
    fetch(grabUrl)
    
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
console.log(data.length)
        for(var i=0; i<data.length; i++) {

            var weatherRow = document.createElement('wr');
            var weatherData = document.createElement('wd');
            var link = document.createElement('a');

            link.textContent = data[i].html_url;
            link.href = data[i].html_url;

            weatherData.appendChild(link);
            weatherRow.appendChild(weatherData);
            forecast.appendChild(weatherRow);
        }
    });
}
$(fetchBtn.addEventListener("click",function(event) {
  event.preventDefault();



    $(".submit").on("click",function() {
        var searchField = $(this).siblings($("#id"))
        var city = searchField.val()
getWeather(city)
        var name = $(this).parent().attr("id")
console.log(city)
        localStorage.setItem(name,city)
    })

   
    

    
})) 

function displayStorage() {
        for(i=0; i < city.length; i++) {
            $(".input").val(localStorage.getItem(".input"))
            
        }
    }
    
    displayStorage()