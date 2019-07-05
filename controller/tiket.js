// dashboard admin

const connection = require('../config/db');

module.exports.allTiket = function (req, res) {
    connection.query('SELECT * FROM tiket'
        , (err, result) => {
        if(err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
    });
}

module.exports.addTiket = function (req, res) {
    var no_tiket = req.body.no_tiket;
    var harga = req.body.harga;
    var id_pemesanan_jadwal_film = req.body.id_pemesanan_jadwal_film;
    var id_pembeli = req.body.id_pembeli;

    connection.query('INSERT INTO tiket (no_tiket, harga, id_pemesanan_jadwal_film, id_pembeli)'
    +' Values (?,?,?,?)', 
    [no_tiket, harga, id_pemesanan_jadwal_film, id_pembeli], (err, result) => {
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

module.exports.findTiket = function (req, res) {
    var id_tiket = req.params.id_tiket;
    connection.query('SELECT * FROM tiket WHERE id_tiket = ?', 
    [id_tiket], (err, result) => {
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

module.exports.updateTiket = function (req, res) {
    var id_tiket = req.body.tiket;
    var no_tiket = req.body.no_tiket;
    var harga = req.body.harga;
    var id_pemesanan_jadwal_film = req.body.id_pemesanan_jadwal_film;
    var id_pembeli = req.body.id_pembeli;

    connection.query('UPDATE tiket SET no_tiket = ?, harga = ?, id_jadwal_pemesanan = ?, id_pembeli = ?'
    +' WHERE id_tiket = ?', [id_tiket, no_tiket, harga, id_pemesanan_jadwal_film, id_pembeli],
    (err, result) => {
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

module.exports.deleteTiket = function (req, res) {
    var id_tiket = req.body.id_tiket;
    connection.query('DELETE * FROM tiket WHERE id_tiket = ?',
    [id_tiket], (err, result) => {
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