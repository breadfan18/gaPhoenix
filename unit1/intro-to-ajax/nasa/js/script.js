// Constants
const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'lwqpAdHbbsi0qxP1hae5OMffY8fhEFZOh5dBFVjf';


// State Variables 
let apiData;

// Cached Element References
const $main = $('main');


// Event Listeners


// Functions
function getData() {
    // This function will get api data and assign it to our apiData state Variable
    $.ajax(`${BASE_URL}?api_key=${API_KEY}&count=6`)
        .then(
            function (data) {
              apiData = data;
              render();
            },
            function (error) {
                
            }
        )
}


function render() {
    // This function will tranfer our api data to the DOM

    console.log(apiData);
    
}

getData()


