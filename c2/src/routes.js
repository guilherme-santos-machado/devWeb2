const express = require('express');
const EntidadeController = require('./Controller/EntidadeController');

const router = require('express').Router();

router.route('/entidades')
    .get(EntidadeController.index)
    .post(EntidadeController.store);


router.route('/entidades/:id')
    .patch(EntidadeController.update)
    .put(EntidadeController.update)
    .delete(EntidadeController.delete)

module.exports = router;