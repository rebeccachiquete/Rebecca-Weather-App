
$(document).ready(function () {
    var cityTextBox = $("#userInput");
    var searchBtn = $("#searchButton");

    searchBtn.on("click", function () {
        var cityName = cityTextBox.val();

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=572d14321ae6789e9c768be6fb36520d&units=imperial";
        // how do i pass that into the open weather api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (results){
            console.log(results);

            var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + results.coord.lat + "&lon=" + results.coord.lon + "&appid=572d14321ae6789e9c768be6fb36520d&units=imperial";
            $.ajax({
            url: uvURL,
            method: "GET"
            }).then(function (results){
                console.log(results);
            })
        })
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=572d14321ae6789e9c768be6fb36520d&units=imperial";
        // how do i pass that into the open weather api
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (results){
            console.log(results);
        })
    });

})
