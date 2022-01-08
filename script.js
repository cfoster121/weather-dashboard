//Adds each city to list on page with button click
$(".btn").click(function (e) {
    e.preventDefault();
    let cityName = $("#searchCity").val();
    $("ul").append("<li>" + cityName + "</li>");
    $("li").addClass("list-group-item"); 
});


// -Step 1
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
