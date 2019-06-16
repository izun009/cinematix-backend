// dashboard admin

const connection = require('../config/db');

module.exports.allPembayaran = function (req, res) {
    connection.query('SELECT * FROM pembayaran', (err, result) => {
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

module.exports.addPembayaran = function (req, res) {
    var total_harga = req.body.harga;
    var id_tiket = req.body.id_tiket;

    connection.query('INSERT INTO tiket (total_harga, id_tiket)'
    +' Values (?,?)', 
    [total_harga,id_tiket], (err, result) => {
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

module.exports.findPembayaran = function (req, res) {
    var id_pembayaran = req.params.id_pembayaran;

    connection.query('SELECT * FROM pembayaran WHERE id_pembayaran = ?', 
    [id_pembayaran], (err, result) => {
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

module.exports.updatePembayaran = function (req, res) {
    var id_pembayaran = req.body.id_pembayaran;
    var total_harga = req.body.harga;
    var id_tiket = req.body.id_tiket;

    connection.query('UPDATE pembayaran SET total_harga = ?, id_tiket = ?'
    +' WHERE id_pembayaran = ?', [total_harga, id_tiket, id_pembayaran],
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

module.exports.deletePembayaran = function (req, res) {
    var id_pembayaran = req.body.id_pembayaran;

    connection.query('DELETE * FROM tiket WHERE id_pembayaran = ?',
    [id_pembayaran], (err, result) => {
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