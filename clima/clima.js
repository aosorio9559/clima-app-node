const axios = require("axios").default;

async function getClima(lat, lng) {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?appid=4a4fc2f3ddb501f19007a13610d1c133&units=metric&lat=${lat}&lon=${lng}`
  );
  return resp.data.main.temp;
}

module.exports = {
  getClima,
};
