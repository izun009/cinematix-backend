// dashboard admin

const connection = require('../config/db');

module.exports.allJadwal = function (req, res) {
    connection.query('SELECT * FROM jadwal', (err, result) => {
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

module.exports.addJadwal = function (req, res) {
    var tanggal = new Date;
    
    connection.query('INSERT INTO jadwal (tanggal) VALUES (?)',
    [tanggal], (err,result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : 'Berhasil Input'
            });
        }
    });
}

module.exports.findJadwal = function (req, res) {
    var id_jadwal = req.params.id_jadwal;

    connection.query('SELECT * FROM jadwal WHERE id_jadwal = ?',
    [id_jadwal], (err, result) => {
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

module.exports.updateJadwal = function (req, res) {
    var id_jadwal = req.body.id_jadwal;
    var tanggal = new Date;

    connection.query('UPDATE jadwal SET tanggal = ? WHERE id_jadwal = ?',
    [tanggal, id_jadwal], (err, result) => {
        if (err) {
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

module.exports.deleteJadwal = function (req, res) {
    var id_jadwal = req.body.id_jadwal;

    connection.query('DELETE FROM jadwal WHERE id_jadwal = ?', 
    [id_jadwal], (err, result) => {
        if (err) {
            res.json({
                status : 400,
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