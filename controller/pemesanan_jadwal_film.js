// dashboard admin

const connection = require('../config/db');

module.exports.allPemesanan = function (req, res) {
    connection.query('SELECT * FROM pemesanan_jadwal_film', 
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

module.exports.addPemesanan = function (req, res) {
    var id_pemesanan_jadwal_film = req.body.id_pemesanan_jadwal_film;
    var id_jadwal_film = req.body.id_jadwal_film;
    var id_studio_kursi = req.body.id_studio_kursi;

    connection.query('INSERT INTO pemesanan_jadwal_film (id_pemesanan_jadwal_film, id_jadwal_film, id_studio_kursi)'
    + ' VALUES (?,?,?)',
    [id_pemesanan_jadwal_film, id_jadwal_film, id_studio_kursi], (err, result) => {
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

module.exports.findPemesanan = function (req, res) {
    var id_pemesanan_jadwal_film = req.params.id_pemesanan_jadwal_film;

    connection.query('SELECT * FROM pemesanan_jadwal_film WHERE id_pemesanan_jadwal_film = ?',
    [id_pemesanan_jadwal_film], (err, result) => {
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

module.exports.updatePemesanan = function (req, res) {
    var id_pemesanan_jadwal_film = req.body.id_pemesanan_jadwal_film;
    var id_jadwal_film = req.body.id_jadwal_film;
    var id_studio_kursi = req.body.id_studio_kursi;

    connection.query('UPDATE pemesanan_jadwal_film SET id_jadwal_film = ?, id_studio_kursi = ?' 
    + ' WHERE id_pemesanan_jadwal_film = ?', 
    [id_pemesanan_jadwal_film, id_jadwal_film, id_studio_kursi], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Update !'
            });
        }
    });
}

module.exports.deletePemesanan = function (req, res) {
    var id_pemesanan_jadwal_film = req.body.id_pemesanan_jadwal_film;

    connection.query('DELETE FROM pemesanan_jadwal_film WHERE id_pemesanan_jadwal_film = ?',
    [id_pemesanan_jadwal_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Delete !'
            });
        }
    });
}