var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

// GET all photos.
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM photos`)
  .then(data => {
    res.json(data.rows)
  })
});

// Get a specific photo
router.get('/:id', function(req, res, next) {
  knex('photos').select().where('id', req.params.id).then(function(photo) {
    res.json(photo);
  });
});

// Add a photo
router.post('/', function(req, res) {
  knex('photos').insert(req.body).then(function() {
    knex('photos').select().then(function(photos) {
      res.json(photos)
    });
  });
})

// Edit a photo
router.patch('/:id/edit', function(req, res) {
  knex('photos').update(req.body).where('id', req.params.id).then(function() {
    knex('photos').select().then(function(photos) {
      res.json(photos)
    });
  });
});

// Remove a photo
router.post('/:id', function(req, res) {
  console.log('route hit', req.body)
  knex('photos').where('id', req.params.id).del().returning("*").then(function(data) {
    knex('photos').select().then(function(photos) {
      res.json(photos)
    });
  });
});

module.exports = router;