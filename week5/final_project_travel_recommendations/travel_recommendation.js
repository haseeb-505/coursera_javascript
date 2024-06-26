








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
            console.log("we are in data field");
            console.log(data);
            // Define an array to store subelements
            const recommendations = [];
            
            // Loop through data and store subelements in recommendations
            for (element in data) {
                data[element].forEach(subelement => {
                    recommendations.push(subelement);
                });
            }
            console.log("Data with recommendations is:", recommendations);
            console.log(`Quer is ${query}`);
            const results = recommendations.filter(item =>
                console.log(`item type ${item.type} and name ${item.name}`)
                (item.type && item.type.toLowerCase().includes(query || '')) ||
                (item.name && item.name.toLowerCase().includes(query || ''))
            );
            console.log(results);
            displayResults(results);
        })
        .catch(error => console.error('Error fetching the recommendation data', error));
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
            <a class="travel-visit" href='#'>visit</a>
        `;
        resultsContainer.appendChild(resultElement);
    });
}
