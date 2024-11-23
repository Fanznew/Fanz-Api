const monk = require('monk');
const { color } = require('../lib/color');

// Mendapatkan URL database dari environment variables
const url = process.env.DB_URL;

if (!url) {
  console.error(color('Cek konfigurasi database, DB_URL belum diatur', 'red'));
  process.exit(1);
}

const db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, FanzOffc', 'green'));
}).catch((e) => {
  console.error(color(`Error: ${e}\nGagal connect ke database`, 'red'));
});

module.exports = db;
