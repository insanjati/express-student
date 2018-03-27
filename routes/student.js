var express = require('express');  
var router = express.Router();  
var mongoose = require('mongoose');  
var Student = require('../models/Student.js');

// GET method
router.get('/', function(req, res, next){  
    Student.find(function(err, student){
        if(err) return next(err);
        res.json(student);
    });
});

// POST method
router.post('/', function(req, res, next){  
    Student.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// GET /student/id --> get berdasarkan id
router.get('/:id', function(req, res, next){  
    Student.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// PUT /student/id --> edit berdasarkan id
router.put('/:id', function(req, res, next){  
    Student.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

// DELETE /student/id --> delete berdasarkan id
router.delete('/:id', function(req, res, next){  
    Student.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

module.exports = router;  