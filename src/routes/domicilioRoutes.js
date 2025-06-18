const express = require('express');
const router = express.Router();
const controller = require('../controllers/domicilioController');

router.post('/', controller.crearDomicilio);
router.get('/', controller.listarDomicilios);
router.get('/:id', controller.obtenerDomicilio);
router.get('/curp/:curp', controller.obtenerDomicilioPorCurp);
router.put('/:id', controller.actualizarDomicilio);
router.delete('/:id', controller.eliminarDomicilio);

module.exports = router;
