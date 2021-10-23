// Constants - data that does NOT change 
const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '6ddc69a0';


// Variables - data that changes


// Cached elements
const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listeners
$form.on('submit', handleSubmit)

// Functions 
function handleSubmit(e) {
    e.preventDefault();

    const movieTitle = $input.val();

    $.ajax(`${BASE_URL}?apikey=${API_KEY}&t=${movieTitle}`)
        .then(
            // success callback 
            function (data) {
                $title.text(data.Title)
                $year.text(data.Year)
                $rated.text(data.Rated)
            },
            // failure callback
            function (error) {
                console.log('BAD REQUEST', error)
            }
        )
}


// Using jQuery's $.ajax() method - we use it to request information from a resource using ajax
// --> this method when called returns a javaScript promise object 



