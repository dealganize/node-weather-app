const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=6e6de03f1ae0c714308901103f9bd3be&query=' +
    latitude +
    ',' +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        ' Local time: ' +
          body.location.localtime +
          '.' +
          ' It is currently ' +
          body.current.temperature +
          ' degrees out. There is a ' +
          body.current.precip +
          '% chance of rain.' +
          ' Wind speed: ' +
          body.current.wind_speed +
          'mph'
      );
    }
  });
};

module.exports = forecast;
