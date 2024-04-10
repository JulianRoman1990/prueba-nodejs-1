const cliente = require("../models/modelClientes");

const clientesController = {
  // registrar cliente
  registro: async (req, res) => {
    try {
      const { name, lastName, email, gender, age } = req.body;
      const nuevoCliente = new cliente({
        name: name,
        lastName: lastName,
        email: email,
        gender: gender,
        age: age,
      });
      await nuevoCliente.save();
      res.status(201).json({
        message: "Cliente registrado correctamente",
        cliente: newCliente,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al registrar el cliente",
        error: error,
      });
    }
  },
  // listar clientes
  listar: async (req, res) => {
    try {
      const clientes = await cliente.find();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({
        message: "Error al listar los clientes",
        error: error,
      });
    }
  },
  // actualizar cliente
  actualizar: async (req, res) => {
    try {
      const { name, lastName, email, gender, age } = req.body;
      const id = req.params.id;
      const cliente = await cliente.findByIdAndUpdate(id, {
        name: name,
        lastName: lastName,
        email: email,
        gender: gender,
        age: age,
      });
      res.status(200).json({
        message: "Cliente actualizado correctamente",
        cliente: cliente,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al actualizar el cliente",
        error: error,
      });
    }
  },
  // eliminar cliente
  eliminar: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await cliente.findByIdAndDelete(id);
      res.status(200).json({
        message: "Cliente eliminado correctamente",
        cliente: cliente,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error al eliminar el cliente",
        error: error,
      });
    }
  },
  // listar cliente por genero
  listarPorGenero: async (req, res) => {
    try {
      const gender = req.params.genero;
      const clientes = await cliente.find({ gender: gender });
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({
        message: "Error al listar los clientes por genero",
        error: error,
      });
    }
  },
  // listar cliente por edad
  listarPorEdad: async (req, res) => {
    try {
      const age = req.params.age;
      const clientes = await cliente.find({ age: age });
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({
        message: "Error al listar los clientes por edad",
        error: error,
      });
    }
  },
  // listar cliente por email
  listarClientePorEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const clientes = await cliente.find({ email: email });
      res.status(200).json(clientes);
    } catch (error) {
      res.status(400).json({
        message: "Error al listar los clientes por email",
        error: error,
      });
    }
  },
  // listar cleinte por id
  listarClientePorId: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await cliente.findById(id);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(400).json({
        message: "Error al listar el cliente por id",
        error: error,
      });
    }
  },
};

module.exports = clientesController;
