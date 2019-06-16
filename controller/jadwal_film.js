// dashboard admin

const connection = require('../config/db');

module.exports.allJadwalFilm = function (req, res) {
    connection.query('SELECT jadwal_film.id_jadwal_film, jadwal.tanggal, film.judul FROM jadwal_film'
    + ' INNER JOIN jadwal ON jadwal_film.id_jadwal = jadwal.id_jadwal'
    + ' INNER JOIN film ON jadwal_film.id_film = film.id_film'
    + ' WHERE jadwal_film.id_jadwal = jadwal.id_jadwal AND jadwal_film.id_film = film.id_film',
    (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
    }); 
}

module.exports.addJadwalFilm = function (req, res) {
    var id_jadwal_film = req.body.id_jadwal_film;
    var id_jadwal = req.body.id_jadwal;
    var id_film = req.body.id_film;
    connection.query('INSERT INTO jadwal_film (id_jadwal_film, id_jadwal, id_film) VALUES (?,?,?)',
    [id_jadwal_film, id_jadwal, id_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Input !'
            });
        }
    });
}

module.exports.findJadwalFilm = function (req, res) {
    var id_jadwal_film = req.params.id_jadwal_film;

    connection.query('SELECT * FROM jadwal_film WHERE id_jadwal_film = ?', 
    [id_jadwal_film], (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
    });
}

module.exports.updateJadwalFilm = function (req, res) {
    var id_jadwal_film = req.body.id_jadwal_film;
    var id_jadwal = req.body.id_jadwal;
    var id_film = req.body.id_film;
    connection.query('UPDATE jadwal_film SET id_jadwal = ?, id_film = ? WHERE id_jadwal_film = ?',
    [id_jadwal, id_film, id_jadwal_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Update !"
            });
        }
    });
}

module.exports.deleteJadwalFilm = function (req, res) {
    var id_jadwal_film = req.body.id_jadwal_film;
    connection.query('DELETE FROM jadwal_film WHERE id_jadwal_film = ?',
    [id_jadwal_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Delete"
            });
        }
    });
}


// ket: Masih Error dan kurang mengerti pemakaiannya