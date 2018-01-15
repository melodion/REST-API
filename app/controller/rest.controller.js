var Rest = require('../models/rest.models.js');

//Fucntion Save/Create
exports.create = function(req, res) {
    if(!req.body.content) {
        res.status(400).send({message: "Rest Tidak Boleh Kosong !"});
    }
    var rest = new Rest({title: req.body.title || "Untitled Rest", content: req.body.content});

    rest.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Error, Terjadi Kesalahan !"});
        } else {
            res.send(data);
        }
    });
};
//Function GET All
exports.findAll = function(req, res) {
    Rest.find(function(err, rests){
        if(err) {
            res.status(500).send({message: "Error, Terjadi Kesalahan !"});
        } else {
            res.send(rests);
        }
    });
};
//Fucntion GET By ID
exports.findOne = function(req, res) {
    Rest.findById(req.params.restid, function(err, data) {
        if(err) {
            res.status(500).send({message: "Tidak Dapat Menampilkan REST : " + req.params.restid});
        } else {
            res.send(data);
        }
    });
};
//Function Update
exports.update = function(req, res) {
    Rest.findById(req.params.restid, function(err, rest) {
        if(err) {
            res.status(500).send({message: "Tidak Data Ditemukan REST Dengan ID " + req.params.restid});
        }

        rest.title   = req.body.title;
        rest.content = req.body.content;
        rest.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Tidak Dapat Update REST ID " + req.params.restid});
            } else {
                res.send(data);
            }
        });
    });
};

//Function Delete
exports.delete = function(req, res) {
    Rest.remove({_id: req.params.restid}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Gagal Hapus REST ID " + req.params.id});
        } else {
            res.send({message: "Hapus Berhasil !"})
        }
    });
};