const connection = require('../config/db');

module.exports.allFilm = function (req, res) {
    connection.query('SELECT film.judul, film.sinopsis, film.jam_mulai, film.durasi,'
    + ' kategori.nama_kategori FROM film INNER JOIN kategori ON film.id_kategori = kategori.id_kategori'
    + ' WHERE film.id_kategori = kategori.id_kategori',
    (err,result) => {
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

module.exports.addFilm = function (req, res) {
    var id_film = req.body.id_film;
    var judul = req.body.judul;
    var sinopsis = req.body.sinopsis;
    var jam_mulai = req.body.jam_mulai;
    var durasi = req.body.durasi;
    var id_kategori = req.body.id_kategori

    connection.query('INSERT INTO film (id_film, judul, sinopsis, jam_mulai, durasi, id_kategori)' 
    + ' VALUES (?,?,?,?,?,?)',
    [id_film, judul, sinopsis, jam_mulai, durasi, id_kategori], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Input !"
            });
        }
    });
}

module.exports.findFilm = function (req, res) {
    var id_film = req.params.id_film;

    connection.query('SELECT * FROM film WHERE id_film = ?',
    [id_film], (err, result) => {
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

module.exports.updateFilm = function (req, res) {
    var id_film = req.body.id_film;
    var judul = req.body.judul;
    var sinopsis = req.body.sinopsis;
    var jam_mulai = req.body.jam_mulai;
    var durasi = req.body.durasi;

    connection.query('UPDATE film SET judul = ?, sinopsis = ?, jam_mulai = ?, durasi = ? WHERE id_film = ?',
    [judul, sinopsis, jam_mulai, durasi, id_film], (err, result) => {
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

module.exports.deleteFilm = function (req, res) {
    var id_film = req.body.id_film;

    connection.query('DELETE FROM film WHERE id_film = ?',
    [id_film], (err, result) => {
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