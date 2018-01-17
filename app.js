const request = require('request');
const yargs = require('yargs');

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

console.log(argv.a);
var encodedAddress = encodeURIComponent(argv.a);

request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    var latitude = body.results[0].geometry.location.lat;
    var longitude = body.results[0].geometry.location.lng;

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
});
