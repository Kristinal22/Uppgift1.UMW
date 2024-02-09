var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var DogModel = require('./models/DogModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
    DogModel.find().then(function(dogs){
        res.json(dogs);
    });
});

/*POST*/ 
router.post('/', function(req, res, next){
    DogModel.create(req.body).then(function(post){
        res.json(post);
    });
});

/*DELETE*/
router.delete('/:id', function(req, res, next){
    DogModel.findByIdAndDelete(req.params.id, req.body).then(function(post){
        res.json(post);
    });
});


module.exports = router;