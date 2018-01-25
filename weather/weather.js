const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/3c52ed7a7a2ed4d16a86bb4aa3dfc793/${latitude},${longitude}`;

    request({
        uri: url,
        json: true,
    }, (error, response, body) => {

        if (!error && response.statusCode === 200){
            var temperature = ((body.currently.temperature - 32) * 5 / 9).toFixed(2);
            var apparentTemperature = ((body.currently.apparentTemperature - 32) * 5 / 9).toFixed(2);
            
            callback(undefined, {
                temperature: temperature,
                apparentTemperature: apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather
};