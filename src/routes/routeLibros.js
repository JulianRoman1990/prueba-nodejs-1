const express = require('express');
const librosController = require('../controllers/controlLibros');

const router = express.Router();

router.post('/registro/libro', librosController.registro);
router.get('/listar/libros', librosController.listar);
router.put('/actualizar/libro/:id', librosController.actualizar);
router.delete('/eliminar/libro/:id', librosController.eliminar);
router.get('/listarPorAutor/:autor', librosController.listarPorAutor);
router.get('/listarPorNombre/:nombre', librosController.listarPorNombre);
router.get('/listarPorPaginas/:paginas', librosController.listarPorPaginas);
router.get('/listarPorId/:id', librosController.listarPorId);




module.exports = router;