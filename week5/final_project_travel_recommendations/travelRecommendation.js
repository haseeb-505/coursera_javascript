// // Ensure that recommendation_api is only declared once, and it should not be re-declared if it's already defined elsewhere in your script.

// document.addEventListener('DOMContentLoaded', function() {
//     const recommendation_file_url = './travel_recommendation_api.json';

//     document.getElementById('search-button').addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent form submission
//         const query = document.getElementById('search-input').value.toLowerCase();
//         searchRecommendations(query);
//     });

//     document.getElementById('clear-button').addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent form submission
//         document.getElementById('search-input').value = '';
//         document.getElementById('results').innerHTML = '';
//     });

//     function searchRecommendations(query) {
//         fetch(recommendation_file_url)
//             .then(response => response.json())
//             .then(data => {
//                 const results = filterResults(data, query);
//                 displayResults(results);
//             })
//             .catch(error => console.error('Error fetching the recommendation data', error));
//     }

//     function filterResults(data, query) {
//         const recommendations = [];

//         // Helper function to recursively search through all properties
//         function searchAllProperties(item) {
//             for (const key in item) {
//                 if (typeof item[key] === 'object') {
//                     searchAllProperties(item[key]);
//                 } else if (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().includes(query)) {
//                     if (item.description !== undefined && item.imageUrl !== undefined) {
//                         recommendations.push(item); // Only add if description and imageUrl are defined
//                     }
//                 }
//             }
//         }

//         // Search through each category in the data
//         for (const category in data) {
//             if (Array.isArray(data[category])) {
//                 data[category].forEach(item => {
//                     searchAllProperties(item);
//                 });
//             }
//         }

//         return getUniqueNumbers(recommendations);
//     }

//     function getUniqueNumbers(arr) {
//         // Create a Set from the array to automatically remove duplicates
//         const uniqueSet = new Set(arr);
//         // Convert the Set back to an array to get the unique numbers
//         const uniqueArr = Array.from(uniqueSet);
//         return uniqueArr;
//     }

//     function displayResults(results) {
//         const resultsContainer = document.getElementById('results');
//         resultsContainer.innerHTML = '';
//         results.forEach(result => {
//             const resultElement = document.createElement('div');
//             resultElement.classList.add('card-flex')
//             resultElement.innerHTML = `
//                 <img src="${result.imageUrl}" alt="${result.name}" width="300" height="300">
//                 <h3>${result.name}</h3>
//                 <p>${result.description}</p>
//                 <a class="travel-visit" href='./home.html'>visit</a>
//             `;
//             resultsContainer.appendChild(resultElement);
//         });
//     }
// });


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

    return getUniqueNumbers(recommendations);
}

// unique array

function getUniqueNumbers(arr) {
    // Create a Set from the array to automatically remove duplicates
    const uniqueSet = new Set(arr);
    // Convert the Set back to an array to get the unique numbers
    const uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
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

// show time New York time zone 
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);
document.getElementById('time-newyork').innerHTML = `<h4>New York, America Time Live</h4>
                                                        <span>${newYorkTime}</span>`