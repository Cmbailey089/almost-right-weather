var forecast = document.getElementById ("weatherTable");
var FetchBtn = document.getElementById ("btn");

function getApi() {
    var grabUrl = 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid={API key}';

    fetch(grabUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)

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

$(function() {
    $(".submit").on("click",function() {
        var city = ($(this).siblings(".input").val())
        var stuff = ($(this).parent("id"))

        localStorage.setItem(stuff,city)
    })

    function displayStorage() {
        for(i=0; i < city.length; i++) {
            $(".input").val(localStorage.getItem(".input"))
        }
    }
    displayStorage()

})