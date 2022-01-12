//Adds each city to list on page with button click
function citySearch() {

    //Saves searched city name to local storage
    let city = localStorage.getItem("City");

    //Current Weather
    //Uses local storage to populate API to collect current weather data from searched city
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c4d9a78b6ae4d8ac86d38fd00d946670", function (data) {
        console.log(data);

        //Creates current weather attributes   
        var weatherType = "Conditions: " + data.weather[0].main;
        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var degrees = "Temperature: " + data.main.temp + " ℉";
        var humidity = "Humidity: " + data.main.humidity + "%";
        var windSpeed = "Wind Speed: " + data.wind.speed + " mph";

        //Displays current weather attributes
        $(".weather-type").html(weatherType);
        $(".weather-icon").attr("src", icon);
        $(".temperature").html(degrees);
        $(".humidity").html(humidity);
        $(".wind-speed").html(windSpeed);


        //Saves latitude and longitude of searched city
        var lat = data.coord.lat
        var long = data.coord.lon


        //5 Day forecast 
        //Populate API using saved lat/long data for current city
        $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=current,minutely,hourly,alers&units=imperial&appid=c4d9a78b6ae4d8ac86d38fd00d946670", function (data) {


        //UV Index color coordinated by severity
            var uvIndex = data.daily[0].uvi

            if (data.daily[0].uvi < 3) {
                $(".uv-index").html("UV Index: " + uvIndex)
                $(".uv-index").css("background-color", "rgb(37, 190, 37)")
            }
            if (data.daily[0].uvi >= 3 && data.daily[0].uvi < 6) {
                $(".uv-index").html("UV Index: " + uvIndex)
                $(".uv-index").css("background-color", "rgb(247, 247, 16)")
            }
            if (data.daily[0].uvi >= 6 && data.daily[0].uvi < 8) {
                $(".uv-index").html("UV Index: " + uvIndex)
                $(".uv-index").css("background-color", "orange")
            }
            if (data.daily[0].uvi >= 8 && data.daily[0].uvi < 11) {
                $(".uv-index").html("UV Index: " + uvIndex)
                $(".uv-index").css("background-color", "red")
            }
            if (data.daily[0].uvi >= 11) {
                $(".uv-index").html("UV Index: " + uvIndex)
                $(".uv-index").css("background-color", "rgb(174, 9, 207)")
            }



            //Day of the week for 5 consecutive days starting today
            let dayOne = moment().format('dddd')
            let dayTwo = moment().add(1, "d").format('dddd')
            let dayThree = moment().add(2, "d").format('dddd')
            let dayFour = moment().add(3, "d").format('dddd')
            let dayFive = moment().add(4, "d").format('dddd')

            //Creates values for day of week, weather condition, high, and low
            var day1 = "<br>" + dayOne + "<br>" + "<br>" + data.daily[0].weather[0].main + "<br>" + "High - " + data.daily[0].temp.max + " ℉" + "<br>" + "Low - " + data.daily[0].temp.min + " ℉" + "<br>" + "<br>";
            var day2 = "<br>" + dayTwo + "<br>" + "<br>" + data.daily[1].weather[0].main + "<br>" + "High - " + data.daily[1].temp.max + " ℉" + "<br>" + "Low - " + data.daily[1].temp.min + " ℉" + "<br>" + "<br>";
            var day3 = "<br>" + dayThree + "<br>" + "<br>" + data.daily[2].weather[0].main + "<br>" + "High - " + data.daily[2].temp.max + " ℉" + "<br>" + "Low - " + data.daily[2].temp.min + " ℉" + "<br>" + "<br>";
            var day4 = "<br>" + dayFour + "<br>" + "<br>" + data.daily[3].weather[0].main + "<br>" + "High - " + data.daily[3].temp.max + " ℉" + "<br>" + "Low - " + data.daily[3].temp.min + " ℉" + "<br>" + "<br>";
            var day5 = "<br>" + dayFive + "<br>" + "<br>" + data.daily[4].weather[0].main + "<br>" + "High - " + data.daily[4].temp.max + " ℉" + "<br>" + "Low - " + data.daily[4].temp.min + " ℉" + "<br>" + "<br>";

            //Displays daily values in containers
            $("#d1").html(day1);
            $("#d2").html(day2);
            $("#d3").html(day3);
            $("#d4").html(day4);
            $("#d5").html(day5);

        })
    });


}

$(".btn").click(function (e) {
    e.preventDefault();
    let cityName = $("#searchCity").val();
    localStorage.setItem("City", cityName)
    let listEl = $("<li>")
    listEl.text(cityName)
    listEl.addClass("list-group-item")
    $("#recent-searches").append(listEl);
    listEl.click(function (e) {
        console.log("clicking prev")
        console.log(cityName);
    })
    citySearch(cityName)
});

// $(".list-group-item").click(function (e) {
//     e.preventDefault()
//     console.log("clicking prev")
//     let prevCityName = e.target.textContent
//     console.log(prevCityName);
//     // citySearch(prevCityName);
// })


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
