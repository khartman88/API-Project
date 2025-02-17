
const weatherElement = document.getElementById('weather');
const temperatureButton = document.getElementById('temperatureButton');
const windButton = document.getElementById('windButton');

// temp fetch //

const fetchTemperature = (endpoint) => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
        }
            return response.json();
    })
        .then(data => {
            
                weatherElement.innerText = `Current Temperature: ${data.current_weather.temperature}°C`;
            })
};

// wind speed fetch //

const fetchWindSpeed = (endpoint) => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
        }
            return response.json();
    })
        .then(data => {
            weatherElement.innerText = `Wind Speed: ${data.current_weather.windspeed} km/h`;
            })
};

// button events //

temperatureButton.addEventListener('click', () => fetchTemperature('temperature'));
windButton.addEventListener('click', () => fetchWindSpeed('wind'));

// default temp and wind //

fetchTemperature('temperature');
