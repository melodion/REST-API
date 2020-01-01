module.exports = function(app) {

    var rest = require('../controller/rest.controller.js');

    // Simpan rest
    app.post('/rest', rest.create);

    // Menampilkan semua data rest
    app.get('/rest', rest.findAll);

    // Menampilkan rest berdasarkan ID
    app.get('/rest/:restid', rest.findOne);

    // Update rest berdasarkan ID
    app.put('/rest/:restid', rest.update);

    // Delete rest berdasarkan ID
    app.delete('/rest/:restid', rest.delete);


    app.app('',rest.findOne);
}