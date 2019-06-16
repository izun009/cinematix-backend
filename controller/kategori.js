// dashboard admin

const connection = require('../config/db');

module.exports.allKategori = function (req, res) {
    connection.query('SELECT * FROM kategori', (err, result) => {
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

module.exports.addKategori = function (req, res) {
    var nama_kategori = req.body.nama_kategori;

    connection.query('INSERT INTO kategori (nama_kategori) VALUES (?)',
    [nama_kategori], (err, result) => {
        if(err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message :'Berhasil Input'
            });
        }
    });
}

module.exports.findKategori = function (req, res) {
    var id_kategori = req.params.id_kategori;
    connection.query('SELECT * FROM kategori WHERE id_kategori = ?',
    [id_kategori], (err, result) => {
        if(err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
    });
}

module.exports.updateKategori = function (req, res) {
    var id_kategori = req.body.id_kategori;
    var nama_kategori = req.body.nama_kategori;

    connection.query('UPDATE kategori SET nama_kategori = ? WHERE id_kategori = ?',
    [nama_kategori, id_kategori], (err, result) => {
        if(err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Diubah'
            });
        }
    });
}

module.exports.deleteKategori = function (req, res) {
    var id_kategori = req.body.id_kategori;

    connection.query('DELETE FROM kategori WHERE id_kategori = ?',
    [id_kategori], (err, result) => {
        if(err) {
            res.json({
                status: 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Dihapus'
            });
        }
    });
}
