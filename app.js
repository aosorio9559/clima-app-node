const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Ciudad para obtener el clima",
    demandOption: true,
  },
}).argv;

async function getInfo(direccion) {
  try {
    const ciudad = await lugar.getLugarLatLng(direccion);
    const temperatura = await clima.getClima(ciudad.lat, ciudad.lng);

    console.log(`La temperatura en ${ciudad.direccion} es ${temperatura}`);
  } catch (error) {
    console.log(error);
  }
}

getInfo(argv.direccion);
