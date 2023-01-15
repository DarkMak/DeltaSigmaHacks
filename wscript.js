let weather = {
    "apikey": "23597f791825e44ee9c68b492743a9d7"
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Hamilton&units=metric&appid=23597f791825e44ee9c68b492743a9d7"
            ).then(response) => response.json())
            .then(data) => console.log(data));
        }
        
    }
}