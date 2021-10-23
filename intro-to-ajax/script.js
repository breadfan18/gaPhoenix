//IIFE - Immediately invoked function expression 
$(function () {
    // Constants - data that does NOT change 
    const BASE_URL = 'https://www.omdbapi.com/';
    const API_KEY = '6ddc69a0';


    // Variables - data that changes
    let movieData;

    // Cached elements
    const $form = $('form');
    const $input = $('input[type="text"]');
    const $main = $('main')

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
                    movieData = data;
                    render();
                },
                // failure callback
                function (error) {
                    console.log('BAD REQUEST', error)
                }
            )
    }

    function render() {
        $main.html(
            `
            <img src='${movieData.Poster}' alt='${movieData.Title}'' />
            <h3>Title</h3>
            <p id="title">${movieData.Title}</p>
            <p>Year</p>
            <p id="year">${movieData.Year}</p>
            <p>Rating</p>
            <p id="rated">${movieData.Rated}</p>
            `
        )
    }
})

