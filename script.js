//Saves searched city name to local storage
let city = localStorage.getItem("City");


//Adds each city to list on page with button click
function citySearch(city) {

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

        console.log(lat, long)

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



            //Day of the week + date for 5 consecutive days starting today
            let dayOne = moment().format('ddd MMM Do')
            let dayTwo = moment().add(1, "d").format('ddd MMM Do')
            let dayThree = moment().add(2, "d").format('ddd MMM Do')
            let dayFour = moment().add(3, "d").format('ddd MMM Do')
            let dayFive = moment().add(4, "d").format('ddd MMM Do')

            //Access daily weather icon from API
            let dayOneIcon = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
            let dayTwoIcon = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
            let dayThreeIcon = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
            let dayFourIcon = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
            let dayFiveIcon = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";

            //Display daily weather icon from source
            $("#d1-icon").attr("src", dayOneIcon)
            $("#d2-icon").attr("src", dayTwoIcon)
            $("#d3-icon").attr("src", dayThreeIcon)
            $("#d4-icon").attr("src", dayFourIcon)
            $("#d5-icon").attr("src", dayFiveIcon)


            //Creates values for day of week, weather condition, high, low, and humidity
            var day1 = "<br>" + dayOne + "<br>"
            var day1weather = data.daily[0].weather[0].main + "<br>" + "High - " + data.daily[0].temp.max + " ℉" + "<br>" + "Low - " + data.daily[0].temp.min + " ℉" + "<br>" + "Humidity - " + data.daily[0].humidity + "%" + "<br>";
            var day2 = "<br>" + dayTwo + "<br>"
            var day2weather = data.daily[1].weather[0].main + "<br>" + "High - " + data.daily[1].temp.max + " ℉" + "<br>" + "Low - " + data.daily[1].temp.min + " ℉" + "<br>" + "Humidity - " + data.daily[1].humidity + "%" + "<br>";
            var day3 = "<br>" + dayThree + "<br>"
            var day3weather = data.daily[2].weather[0].main + "<br>" + "High - " + data.daily[2].temp.max + " ℉" + "<br>" + "Low - " + data.daily[2].temp.min + " ℉" + "<br>" + "Humidity - " + data.daily[2].humidity + "%" + "<br>";
            var day4 = "<br>" + dayFour + "<br>"
            var day4weather = data.daily[3].weather[0].main + "<br>" + "High - " + data.daily[3].temp.max + " ℉" + "<br>" + "Low - " + data.daily[3].temp.min + " ℉" + "<br>" + "Humidity - " + data.daily[3].humidity + "%" + "<br>";
            var day5 = "<br>" + dayFive + "<br>"
            var day5weather = data.daily[4].weather[0].main + "<br>" + "High - " + data.daily[4].temp.max + " ℉" + "<br>" + "Low - " + data.daily[4].temp.min + " ℉" + "<br>" + "Humidity - " + data.daily[4].humidity + "%" + "<br>";


            //Displays date + weather values in daily containers, before and after weather icon
            $("#d1").html(day1)
            $("#d1-1").html(day1weather);
            $("#d2").html(day2);
            $("#d2-1").html(day2weather)
            $("#d3").html(day3);
            $("#d3-1").html(day3weather)
            $("#d4").html(day4);
            $("#d4-1").html(day4weather)
            $("#d5").html(day5);
            $("#d5-1").html(day5weather)

        })
    });


}



//Add new list element to Recent Searches list after submitting search 
$(".btn").click(function (e) {
    e.preventDefault();
    let cityName = $("#searchCity").val();
    localStorage.setItem("City", cityName)
    $("h2").html("Current Weather - " + cityName)
    $("#searchCity").val("")
    let listEl = $("<li>")
    listEl.text(cityName)
    listEl.addClass("list-group-item")
    $("#recent-searches").append(listEl);
    citySearch(cityName)


    //Search prior city when clicked from search history list
    listEl.click(function (e) {
        let city = cityName
        citySearch(city)

    })
})



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
