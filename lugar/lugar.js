const axios = require("axios").default;


async function getLugarLatLng(dir) {
  const encodedUrl = encodeURI(dir);

  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?appid=4a4fc2f3ddb501f19007a13610d1c133&q=${encodedUrl}`
    );
    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return { direccion, lat, lng };
  } catch (error) {
    throw new Error(`No hay resultados para ${dir}`);
  }
}

module.exports = {
  getLugarLatLng,
};
