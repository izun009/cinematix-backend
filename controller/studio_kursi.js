// dashboard admin

const connection = require('../config/db');

module.exports.allStudioKursi = function (req, res) {
    connection.query('SELECT * FROM studio_kursi'
    + ' INNER JOIN studio ON studio_kursi.id_studio = studio.id_studio'
    + ' INNER JOIN kursi ON studio_kursi.id_kursi = kursi.id_kursi'
    + ' WHERE studio_kursi.id_studio = studio.id_studio AND studio_kursi.id_kursi = kursi.id_kursi',
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

module.exports.addStudioKursi = function (req, res) {
    var id_studio_kursi = req.body.id_studio_kursi;
    var id_studio = req.body.id_studio;
    var id_kursi = req.body.id_kursi;

    connection.query('INSERT INTO studio_kursi (id_studio_kursi, id_studio, id_kursi) VALUES (?,?,?)',
    [id_studio_kursi, id_studio, id_kursi], (err, result) => {
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

module.exports.findStudioKursi = function (req, res) {
    var id_studio_kursi = req.params.id_studio_kursi;
    
    connection.query('SELECT * FROM studio_kursi WHERE id_studio_kursi = ?', 
    [id_studio_kursi], (err, result) => {
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

module.exports.updateStudioKursi = function (req, res) {
    var id_studio_kursi = req.body.id_studio_kursi;
    var id_studio = req.body.id_studio;
    var id_kursi = req.body.id_kursi;

    connection.query('UPDATE studio_kursi SET id_studio = ?, id_kursi = ? WHERE id_studio_kursi = ?',
    [id_studio, id_kursi, id_studio_kursi], (err, result) => {
        if(err){
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

module.exports.deleteStudioKursi = function (req, res) {
    var id_studio_kursi = req.body.id_studio_kursi;

    connection.query('DELETE FROM studio_kursi WHERE id_studio_kursi = ?',
    [id_studio_kursi], (err, result) => {
        if(err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 400,
                message : 'Berhasil Delete !'
            });
        }
    });
}