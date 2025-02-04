
fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true")
    .then(response => {
        if (!response.ok) {
            console.log("Response status:", response.status); //checking fetch
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
    .then(data => {
        console.log('Weather Data:', data);
    
        const temperature = data.current_weather.temperature;
        const weatherElement = document.getElementById("weather");
        weatherElement.innerText = `Current Temperature: ${temperature}°C`;
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });

