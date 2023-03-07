var forecast = document.getElementById ("weatherTable");
var fetchBtn = document.getElementById ("btn");
debugger
var getWeather = function(city) {
    var grabUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey;
    var APIkey = "195afc894ee5fa544eb826395ad34cb5"

    fetch(grabUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
debugger
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
        var city = $(this).siblings(".input").val()
        var name = $(this).parent().attr("id")

        localStorage.setItem(name,city)
    })

    function displayStorage() {
        for(i=0; i < city.length; i++) {
            $(".input").val(localStorage.getItem(".input"))
        }
    }
    displayStorage()

    
}))