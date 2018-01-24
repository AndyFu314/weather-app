// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//     if (errorMessage){
//         console.log(errorMessage);
//     }else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

// 3c52ed7a7a2ed4d16a86bb4aa3dfc793

const request = require('request');

const url = 'https://api.darksky.net/forecast/3c52ed7a7a2ed4d16a86bb4aa3dfc793/25.0612289,121.6407782';

request({
    uri: url,
    json: true,
}, (error, response, body) => {

    if (!error && response.statusCode === 200){
        var temperature = ((body.currently.temperature - 32) * 5 / 9).toFixed(2);
        
        console.log('temperature: ', temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});
