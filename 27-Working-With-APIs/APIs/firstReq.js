const axios = require('axios');
axios.get('https://api.openweathermap.org/data/2.5/weather?id=5358705&appid=1c8b0b82c63b80bc5980ac788e9bfcba')
    .then(function(response) {
        console.log('The current weather in HB is ')
        console.log(response.data.weather[0].main);
    })
    .catch(function(error) {
        console.log('SOMETHING WENT WRONG');
        console.log(error);
    });
    // key ea5a053fd3454e0f1a978b485a7e1a93