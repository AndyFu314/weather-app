const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAO_B2N26cLaLz8MtXLmJPDAnQXcjLw7Bg`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/3c52ed7a7a2ed4d16a86bb4aa3dfc793/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response) => {
    
    if (response.status === 200) {
        var temperature = ((response.data.currently.temperature - 32) * 5 / 9).toFixed(2);
        var apparentTemperature = ((response.data.currently.apparentTemperature - 32) * 5 / 9).toFixed(2);

        console.log(`所查詢位置現在的溫度為${temperature}, 體感溫度為${apparentTemperature}`);
    } else {
        throw new Error('Unable to fetch weather.');
    }
}).catch((e) => {
    if (e.code === 'ECONNREFUSED'){
        console.log('Unable to connect to API servers.');
    } else {
        console.log(`Oops! Somthing wrong... \r\nThe wrong message: ${e.message}`);
    }
});


