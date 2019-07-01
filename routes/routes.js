const router = require('../controller/formlogin');

module.exports = function (app) {
    var routeP = require('../controller/pembeli');
    var routeK = require('../controller/kursi');
    var routeS = require('../controller/studio');
    var routeKate = require('../controller/kategori');
    var routeJ = require('../controller/jadwal');
    var routeF = require('../controller/film');
    var routeJF = require('../controller/jadwal_film');
    var routeSK = require('../controller/studio_kursi');
    var routePs= require('../controller/pemesanan_jadwal_film');
    var routeT = require('../controller/tiket');
    var routePm = require('../controller/pembayaran');
    var routeForm = require('../controller/formlogin');
    var routeAdm = require('../controller/admin');

    app.get('/', (req,res) => {
        res.send('Try to /api/v1/pembeli');
    });

    // app.post('/api/v1/register', routeForm.register);
    // app.post('/api/v1/login', routeForm.login);


    app.get('/api/v1/pembeli', routeP.allUsers);
    app.get('/api/v1/pembeli/:id_pembeli', routeP.findUser);
    app.post('/api/v1/pembeli/add', routeP.addUser);
    app.post('/api/v1/pembeli/edit', routeP.updateUser);
    app.post('/api/v1/pembeli/del', routeP.deleteUser);


    app.post('/api/v1/register', routeAdm.register);
    app.post('/api/v1/login', routeAdm.login);

    app.get('/api/v1/kursi', routeK.allKursi);
    app.get('/api/v1/kursi/:id_kursi', routeK.findKursi);
    app.post('/api/v1/kursi', routeK.addKursi);
    app.put('/api/v1/kursi', routeK.updateKursi);
    app.delete('/api/v1/kursi', routeK.deleteKursi);

    app.get('/api/v1/studio', routeS.allStudio);
    app.get('/api/v1/studio/:id_studio', routeS.findStudio);
    app.post('/api/v1/studio', routeS.addStudio);
    app.put('/api/v1/studio', routeS.updateStudio);
    app.delete('/api/v1/studio', routeS.deleteStudio);

    app.get('/api/v1/kategori', routeKate.allKategori);
    app.get('/api/v1/kategori/:id_kategori', routeKate.findKategori);
    app.post('/api/v1/kategori', routeKate.addKategori);
    app.put('/api/v1/kategori', routeKate.updateKategori);
    app.delete('/api/v1/kategori', routeKate.deleteKategori);

    app.get('/api/v1/jadwal', routeJ.allJadwal);
    app.get('/api/v1/jadwal/:id_jadwal', routeJ.findJadwal);
    app.post('/api/v1/jadwal', routeJ.addJadwal);
    app.put('/api/v1/jadwal', routeJ.updateJadwal);
    app.delete('/api/v1/jadwal', routeJ.deleteJadwal);

    app.get('/api/v1/film', routeF.allFilm);
    app.get('/api/v1/film/:id_film', routeF.findFilm);
    app.post('/api/v1/film', routeF.addFilm);
    app.put('/api/v1/film', routeF.updateFilm);
    app.delete('/api/v1/film', routeF.deleteFilm);

    app.get('/api/v1/jadwal_film', routeJF.allJadwalFilm);
    app.get('/api/v1/jadwal_film/:id_jadwal_film', routeJF.findJadwalFilm);
    app.post('/api/v1/jadwal_film', routeJF.addJadwalFilm);
    app.put('/api/v1/jadwal_film', routeJF.updateJadwalFilm);
    app.delete('/api/v1/jadwal_film', routeJF.deleteJadwalFilm);

    app.get('/api/v1/studio_kursi', routeSK.allStudioKursi);
    app.get('/api/v1/studio_kursi/:id_studio_kursi', routeSK.findStudioKursi);
    app.post('/api/v1/studio_kursi', routeSK.addStudioKursi);
    app.put('/api/v1/studio_kursi', routeSK.updateStudioKursi);
    app.delete('/api/v1/studio_kursi', routeSK.deleteStudioKursi);

    app.get('/api/v1/pemesanan_jadwal_film', routePs.allPemesanan);
    app.get('/api/v1/pemesanan_jadwal_film/:id_pemesanan_jadwal_film', routePs.findPemesanan);
    app.post('/api/v1/pemesanan_jadwal_film', routePs.addPemesanan);
    app.put('/api/v1/pemesanan_jadwal_film', routePs.updatePemesanan);
    app.delete('/api/v1/pemesanan_jadwal_film', routePs.deletePemesanan);

    app.get('/api/v1/tiket', routeT.allTiket);
    app.get('/api/v1/tiket/:id_tiket', routeT.findTiket);
    app.post('/api/v1/tiket', routeT.addTiket);
    app.put('/api/v1/tiket', routeT.updateTiket);
    app.delete('/api/v1/tiket', routeT.deleteTiket);

    app.get('/api/v1/pembayaran', routePm.allPembayaran);
    app.get('/api/v1/pembayaran/:id_pembayaran', routePm.findPembayaran);
    app.post('/api/v1/pembayaran', routePm.addPembayaran);
    app.put('/api/v1/pembayaran', routePm.updatePembayaran);
    app.delete('/api/v1/pembayaran', routePm.deletePembayaran);
}