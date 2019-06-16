// dashboard admin

const connection = require('../config/db');

module.exports.allStudio = function (req,res) {
    connection.query('SELECT * FROM studio', 
    (err, result) => {
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

module.exports.addStudio = function (req, res) {
    var no_studio = req.body.no_studio;

    connection.query('INSERT INTO studio (no_studio) VALUES (?)', 
    [no_studio], (err, result) => {
        if(err){
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

module.exports.findStudio = function (req, res) {
    var id_studio = req.params.id_studio
    connection.query('SELECT * FROM studio WHERE id_studio = ?', 
    [id_studio], (err, result) => {
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

module.exports.updateStudio = function (req, res) {
    var id_studio = req.body.id_studio;
    var no_studio = req.body.no_studio;

    connection.query('UPDATE studio SET no_studio = ? WHERE id_studio = ?',
    [no_studio, id_studio], (err, result) => {
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

module.exports.deleteStudio = function (req, res) {
    var id_studio = req.body.id_studio;

    connection.query('DELETE FROM studio WHERE id_studio = ?', 
    [id_studio], (err, result) => {
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