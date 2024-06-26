








// fetch('json_data.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log("we are in function!");
//         console.log(data);
//         for (element in data) {
//             console.log(typeof data);
//             console.log(`Element is ${element}: ${data[element]}`);
//             // console.log(data[element])
//             console.log(typeof data[element]);
//             console.log(data[element])
//             if (Array.isArray(data[element])) {
//                 console.log(`${data[element]} is an array.`);
//               } else {
//                 console.log(`${data[element]} is not an array.`);
//               }
//             data[element].forEach(subelement => {
//                 console.log(subelement)
                
//             });


//             }
//         }
//         );



const recommendation_api = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json';
const recommendation_file_url = './travel_recommendation_api.json';

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

    // Helper function to recursively search through all properties
    function searchAllProperties(item) {
        for (const key in item) {
            if (typeof item[key] === 'object') {
                searchAllProperties(item[key]);
            } else if (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().includes(query)) {
                if (item.description !== undefined && item.imageUrl !== undefined) {
                    recommendations.push(item); // Only add if description and imageUrl are defined
                    // do  not break the loop untill you find all the matching results pissible
                }
            }
        }
    }

    // Search through each category in the data
    for (const category in data) {
        if (Array.isArray(data[category])) {
            data[category].forEach(item => {
                searchAllProperties(item);
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
