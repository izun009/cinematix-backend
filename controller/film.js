
const connection = require('../config/db');
const multer = require('multer');
var fs = require('fs');
var path = require('path');
// var storage = multer.diskStorage({

//     destination: (req, file, cb) => {
//         cb(null, '/home/izzen')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });

// const upload = multer({
//     storage
// });

// module.exports.allFilm = function (req, res) {
//     connection.query('SELECT film.id_film, film.judul, film.sinopsis, film.jam_mulai, film.durasi,'
//     + ' kategori.nama_kategori FROM film INNER JOIN kategori ON film.id_kategori = kategori.id_kategori'
//     + ' WHERE film.id_kategori = kategori.id_kategori',
//     (err,result) => {
//         if (err) {
//             res.json({
//                 status : 400,
//                 message : err
//             });
//         } else {
//             res.json(result);
//         }
//     });
// }

module.exports.allFilm = function (req, res) {
    connection.query('SELECT film.images, film.judul FROM film ',
    (err,result) => {
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

module.exports.addFilm = function (req, res) {
    
        // var post = req.body;
        // var judul = post.judul_film;
        // var sinopsis = post.sinopsis_film;
        // // var jam_mulai = post.jam_mulai;
        // var durasi = post.durasi_film;
        // var id_kategori = post.id_kategori_film;
        // // var images = req.body.images;

        // if(!req.files) return res.status(400).send('No File Uploaded');
        // // var file = req.files.uploaded_image;
        // // var img_name = file.judul;
        // var images = req.body.images;
        // if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
        //     file.mv('/home'+images, function(err) {                             
        //         if (err)
        //         return res.status(500).send(err);
        //         var sql = "INSERT INTO `film`(`judul`,`sinopsis`,`durasi`, `kategori` ,`images`) VALUES ('" + judul + "','" + sinopsis + "','" + durasi + "','" + id_kategori + "','" + images + "')";
        //         connection.query(sql,
        //         [judul, sinopsis, durasi, id_kategori,images], (err, result) => {
        //             if (err) {
        //                 res.json({
        //                     status : 400,
        //                     message : err
        //                 });
        //             } else {
        //                 res.json({
        //                     status : 200,
        //                     message : "Berhasil Input !"
        //                 });
        //             }
        //         });
        //     });
        // }

    var id_film = req.body.id_film;
    var judul = req.body.judul_film;
    var sinopsis = req.body.sinopsis_film;
    var jam_mulai = req.body.jam_mulai;
    var durasi = req.body.durasi_film;
    var id_kategori = req.body.kategori_film;
    var images = req.file.path;

    // var imgs = req.body(upload.single('image'));
    // var f = path.basename(images);
    // var source = fs.createReadStream(images);
    // var dest = fs.createWriteStream(path.resolve('/home/izzen/pic',f));
    // source.pipe(dest);
    // source.on('end', ()=> {console.log('Success Copied')});
    // source.on('error', (err)=> {console.log(err)});

    connection.query('INSERT INTO film (judul, sinopsis, durasi, id_kategori,images)' 
    + ' VALUES (?,?,?,?,?)',
    [judul, sinopsis, durasi, id_kategori,images], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.redirect('http://localhost:3000/');
        }
    });
}

module.exports.findFilm = function (req, res) {
    var id_film = req.params.id_film;

    connection.query('SELECT * FROM film WHERE id_film = ?',
    [id_film], (err, result) => {
        if (err){
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json(result);
        }
    });

}

module.exports.updateFilm = function (req, res) {
    var id_film = req.body.id_film;
    var judul = req.body.judul;
    var sinopsis = req.body.sinopsis;
    var jam_mulai = req.body.jam_mulai;
    var durasi = req.body.durasi;

    connection.query('UPDATE film SET judul = ?, sinopsis = ?, jam_mulai = ?, durasi = ? WHERE id_film = ?',
    [judul, sinopsis, jam_mulai, durasi, id_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Update !"
            });
        }
    });
}

module.exports.deleteFilm = function (req, res) {
    var id_film = req.body.id_film;

    connection.query('DELETE FROM film WHERE id_film = ?',
    [id_film], (err, result) => {
        if (err) {
            res.json({
                status : 400,
                message : err
            });
        } else {
            res.json({
                status : 200,
                message : "Berhasil Delete"
            });
        }
    });
}