const express = require('express');
const clientesController = require('../controllers/controlClientes');

const router = express.Router();

router.post('/registro/cliente', clientesController.registro);
router.get('/listar/clientes', clientesController.listar);
router.put('/actualizar/cliente/:id', clientesController.actualizar);
router.delete('/eliminar/cliente/:id', clientesController.eliminar);
router.get('/listarPorGenero/:genero', clientesController.listarPorGenero);
router.get('/listarPorEdad/:edad', clientesController.listarPorEdad);
router.get('/listarClientePorEmail/:email', clientesController.listarClientePorEmail);
router.get('/listarClientePorId/:id', clientesController.listarClientePorId);


module.exports = router;








