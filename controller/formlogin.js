const bcrypt = require('bcrypt');
const connection = require('../config/db');

exports.register = function (req, res) {
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, 10);
    var saldo = req.body.saldo;

    connection.query('INSERT INTO pembeli (email, password, saldo) values (?,?,?)',
    [email, password, saldo], (err, result) => {
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
        res.end();
    });
};

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM pembeli Where email = ?', 
    [email], (err, result) => {
      let user = result[0];
      if (!user){
        res.json({
          status : 400,
          message :'User belum terdaftar!'
        });
      }
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
    });
  }

// exports.login = function(req,res){
//     var email= req.body.email;
//     var password = req.body.password;
//     connection.query('SELECT * FROM pembeli WHERE email = ?',[email], (err, results) => {
//     if (err) {
//       // console.log("error ocurred",error);
//       res.send({
//         status : 400,
//         message : err
//       })
//     }else{
//       // console.log('The solution is: ', results);
//       if(results.length >0){
//         if(results[0].password == password){
//           res.send({
//             status : 200,
//             message : "Success Login !!!"
//               });
//         }
//         else{
//           res.send({
//             status : 204,
//             message : "Email and password does not match"
//               });
//         }
//       }
//       else{
//         res.send({
//           status : 204,
//           message : "Email does not exits"
//             });
//       }
//     }
//     });
//   }