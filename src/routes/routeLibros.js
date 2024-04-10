const express = require('express');
const librosController = require('../controllers/controlLibros');

const router = express.Router();

router.post('/register/book', librosController.register);
router.get('/list/books', librosController.list);
router.put('/update/book/:id', librosController.update);
router.delete('/delete/book/:id', librosController.delete);
router.get('/listForAuthor/:author', librosController.listForAuthor);
router.get('/listForName/:name', librosController.listForName);
router.get('/listForPages/:pages', librosController.listForPages);
router.get('/listForId/:id', librosController.listForId);




module.exports = router;