// dashboard admin

const connection = require('../config/db');

exports.allKursi = function (req, res) {
    connection.query('SELECT * FROM kursi', (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
        res.end();
    });
}

exports.addKursi = function (req, res) {
    var no_kursi = req.body.no_kursi;

    connection.query('INSERT INTO kursi (no_kursi) values (?)', [no_kursi],
    (err, result) => {
        if(err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Input"
            });
        }
        res.end();
    });
}

exports.findKursi = function (req, res) {
    var id_kursi = req.params.id_kursi;

    connection.query('SELECT * FROM kursi WHERE id_kursi = ?', [id_kursi],
    (err, result) => {
        if(err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
        res.end();
    });
}

exports.updateKursi = function (req, res) {
    var id_kursi = req.body.id_kursi;
    var no_kursi = req.body.no_kursi;

    connection.query('UPDATE kursi SET no_kursi = ? WHERE id_kursi = ?', 
    [no_kursi, id_kursi], (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : result
            });
        }
        res.end();
    });
}

exports.deleteKursi = function (req, res) {
    var id_kursi = req.body.id_kursi;

    connection.query('DELETE FROM kursi WHERE id_kursi = ?', [id_kursi],
    (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil di hapus"
            });
        }
    });
}