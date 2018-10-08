var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'sekolah'
})
db.connect(()=>{
    console.log('Terhubung ke MySQL!')
    // db.end()
})
// ambil all data
var perintah = 'select * from siswa'
db.query(perintah, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil)
})

// ambil data nis tertentu
var perintah = 'select * from siswa where nis = ?'
db.query(perintah, 2, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil)
})

// insert data
var data = {
    nis:null, nama:'Caca', kelas:'IX', kota:'Medan'
}
var perintah = 'insert into siswa set ?'
db.query(perintah, data, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil)
})

// update data
var perintah = 'update siswa set kota = ? where nama = ?'
db.query(perintah, ["Bengkulu", "Caca"], (error, hasil)=>{
    if(error) throw error;
    console.log(hasil)
})

// delete
var perintah = 'delete from siswa where nis = ?'
db.query(perintah, 2, (error, hasil)=>{
    if(error) throw error;
    console.log(hasil)
})