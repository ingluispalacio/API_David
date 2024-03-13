const express = require('express');
const router = express.Router(); 
const identificactionTypeController = require('../../controllers/identificationType.controller');

router
    .get('/', identificactionTypeController.get )
    .get('/:id', identificactionTypeController.getById )
    .post('/', identificactionTypeController.create )
    .put('/:id', identificactionTypeController.update )
    .delete('/:id', identificactionTypeController._delete );

module.exports = router;