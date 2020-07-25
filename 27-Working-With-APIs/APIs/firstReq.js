const axios = require('axios');
axios.get('https://www.goole.com')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log('SOMETHING WENT WRONG');
        console.log(error);
    });