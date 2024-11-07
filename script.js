// Your OpenWeather API key
const apiKey = 'fc42444f6e0d1f071f15eb97eb95fd36';

// Function to fetch weather data based on city name
function fetchWeatherByCity(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Weather data:', data);
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('location').textContent = 'Error: Unable to retrieve weather data.';
    });
}

// Function to display weather data on the page
function displayWeather(data) {
  const location = `${data.name}, ${data.sys.country}`;
  const temperature = `${Math.round(data.main.temp)} °C`;
  const description = data.weather[0].description;
  const humidity = `${data.main.humidity}%`;
  const windSpeed = `${data.wind.speed} m/s`;

  document.getElementById('location').textContent = `Location: ${location}`;
  document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
  document.getElementById('description').textContent = `Condition: ${description}`;
  document.getElementById('humidity').textContent = `Humidity: ${humidity}`;
  document.getElementById('wind').textContent = `Wind Speed: ${windSpeed}`;
}

// Function to get weather data based on the city entered by the user
function getWeatherByCity() {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetchWeatherByCity(city);
  } else {
    alert('Please enter a city name');
  }
}
