var express = require('express');
var routeku = require('./route/route_mysql')
var cors = require('cors')

var app = express();
app.use(routeku);
app.use(cors())

// route
app.get('/', (req, res)=>{
    res.send('Express ♥ MySQL')
})

// aktivasi server
app.listen(3210, ()=>{
    console.log('Server aktif di port 3210!')
})