//Adds each city to list on page with button click
$(".btn").click(function (e) {
    e.preventDefault();
    let cityName = $("#searchCity").val();
    $("ul").append("<li>" + cityName + "</li>");
    $("li").addClass("list-group-item");
});


//Current Weather
let city = "Orlando"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c4d9a78b6ae4d8ac86d38fd00d946670", function (data) {
    // console.log(data);

    var weatherType = data.weather[0].main;
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var degrees = data.main.temp + " ℉";
    var humidity = data.main.humidity + "%";
    var windSpeed = data.wind.speed + " mph";

    $(".weather-type").append(weatherType);
    $(".weather-icon").attr("src", icon);
    $(".temperature").append(degrees);
    $(".humidity").append(humidity);
    $(".wind-speed").append(windSpeed);
});


//UV index
//Accuweather API Key - 0q8znAyCHgfaN2OS3I5rUKa5s2gbg4x2




//5 Day Forecast
//Accuweather API Key - 0q8znAyCHgfaN2OS3I5rUKa5s2gbg4x2
//Location Key
$.getJSON("http://dataservice.accuweather.com/locations/v1/search?apikey=0q8znAyCHgfaN2OS3I5rUKa5s2gbg4x2&q=campbell", function (data) {
    let locationKey = data[0].Key
    console.log(locationKey)

    //5 Day forecast
    $.getJSON("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey + "?apikey=0q8znAyCHgfaN2OS3I5rUKa5s2gbg4x2", function (data) {

        var day1 = "High today - " + data.DailyForecasts[0].Temperature.Maximum.Value + " ℉";
        // var day2 = "Temp tomorrow" + data.list[1].main.temp;
        // var day3 = "Temp in 2 days" + data.list[2].main.temp;
        // var day4 = "Temp in 3 days" + data.list[3].main.temp;
        // var day5 = "Temp in 4 days" + data.list[4].main.temp;

        $("#d1").append(day1);
        //     $("#d1").append(day2);
        //     $("#d1").append(day3);
        //     $("#d1").append(day4);
        //     $("#d1").append(day5);

        //UV index
        $.getJSON("https://dataservice.accuweather.com/indices/v1/daily/1day/" + locationKey + "/-15?apikey=0q8znAyCHgfaN2OS3I5rUKa5s2gbg4x2", function (data) {

            var uvIndex = "UV Index: " + data[0].Value + "(" + data[0].Category + ")" 

            $(".uv-index").append(uvIndex);

        })

    })
});



// ****************Step 1****************
// -What is the step
// - Create a form that accept inputs and appends them to the page
// -Why am I going to do it
// - Allow the user to input city for search
// -How am I going to do it
// - Forms or ui
//
// -Step 2
// -What is the step
// - Retrieve weather data from searched city
// -Why am I going to do it
// - Give the user the information they are looking for
// -How am I going to do it
// - js weather api
//
// -Step 3
// -What is the step
// - Modify api to include necessary information
// -Why am I going to do it
// - Acceptance criteria 2
// -How am I going to do it
// - Modify api to include city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//
// -Step 4
// -What is the step
// - Assign color codes to different UV index values
// -Why am I going to do it
// - Visually display quality of UV index
// -How am I going to do it
// - Make if/else function to display different colors for different UV balues
//
// -Step 5
// -What is the step
// - Display 5 day weather forecast for current city
// -Why am I going to do it
// - Show user future weather data along with current weather data
// -How am I going to do it
// - Second api
//
// -Step 6
// -What is the step
// - Make list items clickable to reload weather data for that city
// -Why am I going to do it
// - Allow user to easily view previous search data
// -How am I going to do it
// - Store data from original search criteria to be input back into current search criteria when list item is clicked
//
// -Step 7
// -Finalize/format CSS
//
//
//***ACCEPTANCE CRITERIA***//
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
