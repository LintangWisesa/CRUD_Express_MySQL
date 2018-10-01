var router = require('express').Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
router.use(bodyParser.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'ecommerce'
})
db.connect(()=>{
    console.log('Konek ke MySQL!')
});

// route get all data
router.get('/data', (req, res)=>{
    var perintah = 
    `select * from produk_mainan`;
    db.query(perintah, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil);
    })
})

// route utk ambil data id tertentu
router.get('/data/:id', (req, res)=>{
    var perintah = 
    `select * from produk_mainan where id = ?`;
    db.query(perintah, req.params.id, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil);
    })
})

// insert data to mysql
router.post('/data', (req, res)=>{
    var data = {
        id: req.body.id, nama: req.body.nama,
        harga: req.body.harga, berat: req.body.berat,
        stok: req.body.stok
    }
    var perintah = 'insert into produk_mainan set ?'
    db.query(perintah, data, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})

// edit data id tertentu
router.put('/data/:id', (req, res)=>{
    var data = {
        id: req.body.id, nama: req.body.nama,
        harga: req.body.harga, berat: req.body.berat,
        stok: req.body.stok
    }
    var perintah = 
    'update produk_mainan set ? where id = ?'
    db.query(perintah, [data, req.params.id], (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})

// delete data id tertentu
router.delete('/data/:id', (req, res)=>{
    var perintah = 
    'delete from produk_mainan where id = ?'
    db.query(perintah, req.params.id, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})

module.exports = router;