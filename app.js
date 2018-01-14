const request = require('request');

request({
    url: 'https://maps.google.com/maps/api/geocode/json?address=%E6%96%B0%E5%8C%97%E5%B8%82%E6%B1%90%E6%AD%A2%E5%8D%80%E5%A4%A7%E5%90%8C%E8%B7%AF%E4%B8%80%E6%AE%B5369%E8%99%9F',
    json: true
}, (error, response, body) => {
    var latitude = body.results[0].geometry.location.lat;
    var longitude = body.results[0].geometry.location.lng;

    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
});
