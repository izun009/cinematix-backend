// dashboard admin

const connection = require('../config/db');
const bcrypt = require('bcrypt');

exports.allUsers = function (req,res) {
    connection.query('SELECT * FROM pembeli', (err, rows) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(rows);
        }
    });
}

exports.addUser = function (req, res) {
    var email = req.body.email;
    // var password = req.body.password;
    var password = bcrypt.hashSync(req.body.password, 10);
    var saldo = req.body.saldo;

    connection.query('INSERT INTO pembeli (email, password, saldo) values (?,?,?)',
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
    });
}

exports.findUser = function (req, res) {
    var id_pembeli = req.params.id_pembeli;

    connection.query('SELECT * FROM pembeli WHERE id_pembeli = ? ', [id_pembeli], 
    (err, rows) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(rows);
        }
    });
}


exports.updateUser = function (req, res) {
    var id_pembeli = req.body.id_pembeli;
    var email = req.body.email;
    // var password = req.body.password;
    var password = bcrypt.hashSync(req.body.password, 10);
    var saldo = req.body.saldo;

    connection.query('UPDATE pembeli SET email = ?, password = ?, saldo = ? WHERE id_pembeli = ?',
    [email, password, saldo, id_pembeli], (err, rows) => {
        if (err) throw err;
        res.json({status:200,msg:"success"});
        // if (err){
        //     res.json({
        //         status : 400,
        //         message : err
        //     });
        // } else {
        //     res.json({
        //         status : 200,
        //         message : "Berhasil Input"
        //     });
        // }
    });
}

exports.deleteUser = function (req, res) {
    var id_pembeli = req.body.id_pembeli;

    connection.query('DELETE FROM pembeli WHERE id_pembeli = ?', 
    [id_pembeli], (err, rows) => {
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