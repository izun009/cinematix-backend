const bcrypt = require('bcrypt');
const connection = require('../config/db');

exports.register = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, 10);
    // var password = req.body.password;

    connection.query('INSERT INTO admin (username, email, password) values (?,?,?)',
    [username, email, password], (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Register"
            });
        }
    });
};

exports.login = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    connection.query('SELECT * FROM admin Where username = ?',
    [username], (err, result) => {
      let user = result[0];
      if (!user){
        res.json({
          status : 400,
          message :'User belum terdaftar!'
        });
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result == true){
            res.json({
              status : 200,
              message:'Login Berhasil !'
            });
          } else {
            res.json({
              status : 400,
              message:'Password Salah !'
            });
          }
        });
      }
      
    });
  }