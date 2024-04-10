 const mongoose = require('mongoose');

 const clientesSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     lastName: { type: String,
         required: true},
         
     email: {
         type: String,
         required: true
     },
     gender : {
         type: String,
         required: true
     },
     age: {
         type: Number,
         required: true
     }
 });


 const clientes = mongoose.model('clientes', clientesSchema);
 module.exports = clientes;

















