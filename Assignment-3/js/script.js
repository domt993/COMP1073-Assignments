// Getting all of the required Element from the HTML
const tableBody = document.querySelector('tbody');
const tableRow = document.querySelector('tr');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const pcBtn = document.querySelector('input[value="pc"]');
const browserBtn = document.querySelector('input[value="browser"]');
const allBtn = document.querySelector('input[value="all"]');
const div = document.getElementById('details');

// Base URL for the API
const baseURL = 'https://free-to-play-games-database.p.rapidapi.com/api';

// Search Button Event Listener to fetch games once pressed
searchButton.addEventListener('click', (event) => {
    fetchGames(event);
});

// Fetch Games Function to get the games based on the selected platform and search input
function fetchGames(event) {
    event.preventDefault();
    let url = '';
    // Check which platform button is selected and set the URL accordingly
    if (pcBtn.checked) {url = `${baseURL}/games?platform=pc`;}
    else if (browserBtn.checked) {url = `${baseURL}/games?platform=browser`;}
    else if (allBtn.checked) {url = `${baseURL}/games?platform=all`;}
    else {url = `${baseURL}/games`;}
    
    // Fetching the games from the API using the constructed URL and the header parameters
    fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a315655d9bmsh20a38320fb1b1ecp1bfbc0jsn367f200584af',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    // Returning the response in JSON format if the response is OK
    .then(response => {
        if (!response.ok) {
            throw new Error("Error occured!");
        }
        return response.json();
    })
    // Filtering the games based on the search input of the user
    .then(json => {
        json = json.filter(game => game.title.toLowerCase().includes(searchInput.value.toLowerCase()));
        // Displaying the filtered games in the table
        displayGames(json);
    })
}

// Display Games Function to create the table rows for each game in the filtered JSON response
function displayGames(json) {
    // Clear the table body before displaying the new results
    tableBody.innerHTML = '';
    // For each game in the JSON response, create a new row in the table that contains the game's title, platform, release date, and genre
    json.forEach(game => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="game-id">${game.id}</td>
            <td>${game.title}</td>
            <td>${game.platform}</td>
            <td>${game.release_date}</td>
            <td>${game.genre}</td>
        `;
        // Add an Event Listener to each row that fetches the details of the clicked game
        row.addEventListener('click', (event) => {
            fetchDetails(event, game.id);
        });
        // Append the row to the table body
        tableBody.appendChild(row);
    });
}