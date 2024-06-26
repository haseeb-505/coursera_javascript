//  key word search results

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
            <a class="travel-visit" href='./home.html'>visit</a>
        `;
        resultsContainer.appendChild(resultElement);
    });
}

// sign in form

document.getElementById('sign-in-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('signin-form').style.display = 'block';
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your sign-in logic here (e.g., sending data to a server)
    alert('Sign in form submitted!');
});

document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-signin').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
});

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    console.log('Sign In - Username:', username);
    console.log('Sign In - Password:', password);
    // Add your sign-in logic here (e.g., sending data to a server)
    alert('Sign in form submitted!');
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    console.log('Sign Up - Username:', username);
    console.log('Sign Up - Email:', email);
    console.log('Sign Up - Password:', password);
    // Add your sign-up logic here (e.g., sending data to a server)
    alert('Sign up form submitted!');
});