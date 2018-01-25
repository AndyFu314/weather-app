const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    }else {
        console.log(results.address);

        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage){
                console.log(errorMessage);
            }else {
                console.log(`所查詢位置現在的溫度為${weatherResults.temperature}, 體感溫度為${weatherResults.apparentTemperature}`);
            }
        });
    }
});




