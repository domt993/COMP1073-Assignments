// Getting all of the required Element from the HTML
const tableBody = document.querySelector('tbody');
const tableRow = document.querySelector('tr');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const pcBtn = document.querySelector('input[value="pc"]');
const browserBtn = document.querySelector('input[value="browser"]');
const allBtn = document.querySelector('input[value="all"]');
const div = document.getElementById('details');

// Base URL for the API
const baseURL = 'https://free-to-play-games-database.p.rapidapi.com/api';
gameList = [];