const libro = require('../models/modelLibros');

const BooksController = {
    // registrar libro
    register: async (req, res) => {
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
                message: "book created successfully",
                libro: nuevoLibro,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error trying to register book",
                error: error,
            });
        }
    },
    // listar libros 
    list: async (_req, res) => {
        try {
            const libros = await libro.find();
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: " error ",
                error: error,
            });
        }
    },
    // actualizar libro por id
    update: async (req, res) => {
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
                message: "book update ",
                libro: libro,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error update book",
                error: error,
            });
        }
    },
    // eliminar libro por id
    delete: async (req, res) => {
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
    listForAuthor: async (req, res) => {
        try {
            const author = req.params.author;
            const libros = await libro.find({ author: author });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error to list books for author",
                error: error,
            });
        }
    },
    // listar libro por nombre
    listForName: async (req, res) => {
        try {
            const name = req.params.name;
            const libros = await libro.find({ name: name });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error list books for name",
                error: error,
            });
        }
    },
    // listar libro por paginas
    listForPages: async (req, res) => {
        try {
            const pages = req.params.pages;
            const libros = await libro.find({ pages: pages });
            res.status(200).json(libros);
        } catch (error) {
            res.status(400).json({
                message: "Error to list books for pages",
                error: error,
            });
        }
    },
    // listar libro por id
    listForId: async (req, res) => {
        try {
            const id = req.params.id;
            const libro = await libro.findById(id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(400).json({
                message: "Error to list books for id",
                error: error,
            });
        }
    },
};


module.exports = BooksController;