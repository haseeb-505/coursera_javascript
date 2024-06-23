try{
    function showweatherDetails(event) {
        event.preventDefault();
        // Above code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.
        const city = document.getElementById('city').value;
        const apiKey = '**********';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // fetching the details of the city user entered
        fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(`the data is ${data}`);
                    const weatherInfo = document.getElementById('weatherInfo');
                    weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                            <p>Temperature: ${data.main.temp} &#8451;</p>
                                            <p>Weather: ${data.weather[0].description}</p>`;
                })
    }
} catch(error) {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  };
// event listener
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);