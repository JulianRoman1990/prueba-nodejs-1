const express = require('express');
const clientesController = require('../controllers/controlClientes');

const router = express.Router();

router.post('/register/client', clientesController.register);
router.get('/list/clients', clientesController.list);
router.put('/update/client/:id', clientesController.update);
router.delete('/delete/client/:id', clientesController.delete);
router.get('/listForGender/:gender', clientesController.listForGender);
router.get('/listForAge/:age', clientesController.listForAge);
router.get('/listClientForEmail/:email', clientesController.listClientForEmail);
router.get('/listClientForId/:id', clientesController.listClientForId);


module.exports = router;








