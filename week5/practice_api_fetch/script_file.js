const recommendation_file_url = './json_data.json';


document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('search-input').value.toLowerCase();
    searchRecommendations(query);
});

document.getElementById('clear-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = '';
});

function searchRecommendations(query) {
    fetch(recommendation_file_url)
        .then(response => response.json())
        .then(data => {
            const results = filterResults(data, query);
            displayResults(results);
        })
        .catch(error => console.error('Error fetching the recommendation data', error));
}

function filterResults(data, query) {
    const recommendations = [];
    for (const category in data) {
        if (Array.isArray(data[category])) {
            data[category].forEach(item => {
                if (item.name && item.name.toLowerCase().includes(query)) {
                    recommendations.push(item);
                } else if (item.cities) {
                    item.cities.forEach(city => {
                        if (city.name && city.name.toLowerCase().includes(query)) {
                            recommendations.push(city);
                        }
                    });
                }
            });
        }
    }
    return recommendations;
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('card-flex')
        resultElement.innerHTML = `
            <img src="${result.imageUrl}" alt="${result.name}" width="300" height="300">
            <h3>${result.name}</h3>
            <p>${result.description}</p>
            
        `;
        resultsContainer.appendChild(resultElement);
    });
}
