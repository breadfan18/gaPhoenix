// Constants - data that does NOT change 


// Variables - data that changes


// Cached elements


// Event Listeners


// Functions 


// Using jQuery's $.ajax() method - we use it to request information from a resource using ajax
// --> this method when called returns a javaScript promise object 



$.ajax('https://www.omdbapi.com/?apikey=6ddc69a0&t=Frozen')
    .then(
        // success callback 
        function (data) {
            console.log(data);
        },
        // failure callback
        function (error) {
            console.log('BAD REQUEST', error)
        }
    )