function showweatherDetails(event) {
    event.preventDefault();
    // Above code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.
    const city = document.getElementById('city').value;
    const apiKey = '00c7bbf375335678412c54c02d79ad43';
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

// event listener
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);