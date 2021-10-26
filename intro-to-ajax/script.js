//IIFE - Immediately invoked function expression 
$(function () {
    // Constants - data that does NOT change 
    const BASE_URL = 'https://www.omdbapi.com/';
    const API_KEY = '6ddc69a0';


    // Variables - data that changes
    let movieData;

    let weatherData;



    // Cached elements
    const $form = $('form');
    const $input = $('input[type="text"]');
    const $main = $('main')
    const $weather = $('.weather');

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
                    console.log(movieData)
                    render();
                },
                // failure callback
                function (error) {
                    console.log('BAD REQUEST', error)
                }
            )
        $.ajax('https://api.openweathermap.org/data/2.5/forecast?q=cincinnati&appid=8e0c596f2a6fd2d958d7bb12765da115&units=imperial')
            .then(
                // success callback 
                function (data) {
                    weatherData = data;
                    renderWeatherData()
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

    function renderWeatherData() {
        $weather.html(
            `
            <p>${weatherData.city.country}</p>
 
            `
        )        
    }
})

