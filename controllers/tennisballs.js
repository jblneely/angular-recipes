var express = require('express');
var Tennisball = require('../models/tennisball');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        Tennisball.find(function(err, tennisballs) {
            if (err) return res.status(500).send(err);

            return res.send(tennisballs);
        });
    })
    .post(function(req, res) {
        Tennisball.create(req.body, function(err, tennisball) {
            if (err) return res.status(500).send(err);

            return res.send(tennisball);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        Tennisball.findById(req.params.id, function(err, tennisball) {
            if (err) return res.status(500).send(err);

            return res.send(tennisball);
        });
    })
    .put(function(req, res) {
        Tennisball.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    })
    .delete(function(req, res) {
        Tennisball.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    });

module.exports = router;
