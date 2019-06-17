// dashboard admin

var con = require('../config/db');
var bcrypt = require('bcrypt');

exports.allUsers = function (req,res) {
    con.query('SELECT * FROM pembeli', (err, rows) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(rows);
        }
        res.end();
    });
}

exports.addUser = function (req, res) {
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, 10);
    var saldo = req.body.saldo;

    con.query('INSERT INTO pembeli (email, password, saldo) values (?,?,?)',
    [email, password, saldo], (err, rows) => {
        if (err){
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

exports.findUser = function (req, res) {
    var id_pembeli = req.params.id_pembeli;

    con.query('SELECT * FROM pembeli WHERE id_pembeli = ? ', [id_pembeli], 
    (err, rows) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(rows);
        }
        res.end();
    });
}


exports.updateUser = function (req, res) {
    var id_pembeli = req.body.id_pembeli;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, 10);
    var saldo = req.body.saldo;

    con.query('UPDATE pembeli SET email = ?, password = ?, saldo = ? WHERE id_pembeli = ?',
    [email, password, saldo, id_pembeli], (err, rows) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : rows
            });
        }
        res.end();
    });
}

exports.deleteUser = function (req, res) {
    var id_pembeli = req.body.id_pembeli;

    con.query('DELETE FROM pembeli WHERE id_pembeli = ?', 
    [id_pembeli], (err, rows) => {
        if (err){
            tres.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil di hapus"
            });
        }
        res.end();
    });
}