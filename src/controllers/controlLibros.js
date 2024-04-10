const libro = require('../models/modelLibros');

const librosController = {
    // registrar libro
    registro: async (req, res) => {
        try {
            const { name, author, pages,description } = req.body;
            const nuevoLibro = new libro({
                name: name,
                author: author,
                pages: pages,
                description: description,
            });
            await nuevoLibro.save();
            res.status(201).json({
                message: "Libro registrado correctamente",
                libro: nuevoLibro,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error al registrar el libro",
                error: error,
            });
        }
    },
    // listar libros 
    listar: async (req, res) => {
        try {
            const libros = await libro.find();
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error al listar los libros",
                error: error,
            });
        }
    },
    // actualizar libro por id
    actualizar: async (req, res) => {
        try {
            const {name, author, pages,description } = req.body;
            const id = req.params.id;
            const libro = await libro.findByIdAndUpdate(id, {
                name: name,
                author: author,
                pages: pages,
                description: description,
            });
            res.status(200).json({
                message: "Libro actualizado correctamente",
                libro: libro,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error al actualizar el libro",
                error: error,
            });
        }
    },
    // eliminar libro por id
    eliminar: async (req, res) => {
        try {
            const id = req.params.id;
            const libro = await libro.findByIdAndDelete(id);
            res.status(200).json({
                message: "Libro eliminado correctamente",
                libro: libro,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error al eliminar el libro",
                error: error,
            });
        }
    },
    // listar libro por autor
    listarPorAutor: async (req, res) => {
        try {
            const author = req.params.author;
            const libros = await libro.find({ author: author });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error al listar los libros por autor",
                error: error,
            });
        }
    },
    // listar libro por nombre
    listarPorNombre: async (req, res) => {
        try {
            const name = req.params.name;
            const libros = await libro.find({ name: name });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error al listar los libros por nombre",
                error: error,
            });
        }
    },
    // listar libro por paginas
    listarPorPaginas: async (req, res) => {
        try {
            const pages = req.params.pages;
            const libros = await libro.find({ pages: pages });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error al listar los libros por paginas",
                error: error,
            });
        }
    },
    // listar libro por id
    listarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const libro = await libro.findById(id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(400).json({
                message: "Error al listar el libro por id",
                error: error,
            });
        }
    },
};


module.exports = librosController;