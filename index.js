
const weatherElement = document.getElementById('weather');
const temperatureButton = document.getElementById('temperatureButton');
const windButton = document.getElementById('windButton');

// fetches //

const fetchWeatherData = (endpoint) => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
        }
            return response.json();
    })
        .then(data => {
            if (endpoint === 'temperature') {
                weatherElement.innerText = `Current Temperature: ${data.current_weather.temperature}°C`;
            } else if (endpoint === 'wind') {
                weatherElement.innerText = `Wind Speed: ${data.current_weather.windspeed} km/h`;
            }
    })
};

// button events //

temperatureButton.addEventListener('click', () => fetchWeatherData('temperature'));
windButton.addEventListener('click', () => fetchWeatherData('wind'));

// default temp //
fetchWeatherData('temperature');

