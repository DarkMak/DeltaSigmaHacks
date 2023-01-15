let weather = {
    apikey: "23597f791825e44ee9c68b492743a9d7",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apikey
            )
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));
        },   
        displayWeather: function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            console.log(name, icon, description, temp, humidity, speed)
            
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C"
            document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
            document.querySelector(".wind").innerText = "wind speed " + speed + "km/h";
        },
        search: function(){
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
    };
    
    document.querySelector(".search button").addEventListener("click", function() {
                weather.search();
             });

    document.querySelector(".search-bar").addEventListener("keyup", function(event){
        if(event.key == "Enter"){
            weather.search();
        }

    })