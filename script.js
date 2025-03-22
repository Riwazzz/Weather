async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    const apiKey = '3939428029dc410297f155615251902';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            document.getElementById('weather-result').innerHTML = `<p style="color: red;">${data.error.message}</p>`;
        } else {
            document.getElementById('weather-result').innerHTML = `
                <p>Location: ${data.location.name}, ${data.location.country}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = '<p style="color: red;">Failed to fetch weather data</p>';
    }
}