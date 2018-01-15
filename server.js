var express    = require('express');
var bodyParser = require('body-parser');
var dbConfig   = require('./config/database.config.js');
var mongoose   = require('mongoose');

//Koneksi Database
mongoose.connect(dbConfig.url, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', function() {
    console.log('Koneksi Gagal..!');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("[Output] = Koneksi Berhasil..!");
})
// mongoose.Promise = global.Promise;
// ======================================== Koneksi Manual ================================================
// mongoose.connect('mongodb://dion:passdion@ds151207.mlab.com:51207/db_rest',{ useMongoClient: true })
// .then(() => console.log('Koneksi Sukses !'))
// .catch((err) => console.error(err));
// ========================================================================================================
// buat express app
var app = express();
var port = process.env.PORT || 8088;
// Request dengan content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Request dengan content-type - application/json
app.use(bodyParser.json())

// Definisi route
app.get('/', function(req, res){
    res.json({"message": "Selamat datang di REST API dengan Express"});
});

require('./app/routes/rest.routes.js')(app);
// Jalankan server
app.listen(port, function() {
    console.log("Port Server : " + port);
});
