

// $("#search").click(() => {
//     //console.log($("#city").val())
//     var city = $('#city').val()
//     start(city)
// })
// // 

// function start(arg) {
//     console.log(arg)

//     var url = `https://api.openweathermap.org/data/2.5/forecast?q=${arg}&units=imperial&appid=b21bd6edae2b620a0e9e90759509f2af`

//     $.ajax({
//         url: url,
//         method: "GET",
//     }).then(response => {
//         console.log(response)
//         $("#city").text(response.city.name)
//         $("#temp").text(response.list[0].main.temp)
//         $("#humidity").text(response.list[0].main.humidity)

//     })
// }
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//api key=b21bd6edae2b620a0e9e90759509f2af
//wIcon.setAttribute("src", `https://openweathermap.org/img/wn/${pic}@2x.png`); for pictures
//var picture = data.list[i].weather[0].icon

var weatherInput = document.getElementById('weather')
var fivedayForecast = document.getElementById('forecast')
var searchBtn = $('#searchBtn')

$(document).ready(() => {
    var update = function () {
        document.getElementById("updateTime")
            .innerHTML = moment().format('MMMM Do YYYY, h:mm:ssa');
    }
    setInterval(update, 1000);
})



searchBtn.click(function (event) {
    event.preventDefault()
    var cityInput = $('#city').val();
    console.log('City = ' + cityInput);
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=b21bd6edae2b620a0e9e90759509f2af&units=imperial";
    fetch(requestUrl)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data)
            // var titleEl = document.getElementById("forecast-group")
            // temperature.append("<li>" + response.main.temp + "</li>")
            var titleEl = document.createElement('span');
            // titleEl.textContent = 'temp' + data.list[0].main.temp;
            titleEl.append(data.list[0].main.temp)
        })
})




//local storage
//for loop with 8
//uv index api
