var url = process.env.DB_URL || '';
var db = null;

if (url === '') {
    console.log(color('Peringatan: DB_URL belum diatur, aplikasi akan berjalan tanpa database', 'yellow'));
} else {
    db = monk(url); // Koneksi ke database hanya jika URL ada
}

if (db) {
    db.then(() => {
        console.log(color('Connected correctly to server', 'green'));
    }).catch((e) => {
        console.log(color('Error connecting to database: ' + e, 'red'));
    });
} else {
    console.log(color('Aplikasi berjalan tanpa koneksi ke database', 'blue'));
}

module.exports = db;
