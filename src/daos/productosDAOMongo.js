const mongoose = require('mongoose')
const basicMongoDb = require('../../config/configMongo')

// Schema de productos
const schema = new mongoose.Schema({
    nombre: { type: String, required: true, max: 100 }, 
    descripcion: { type: String, required: true, max: 100 },
    codigo: { type: String, required: true, max: 100 },
    foto: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    timestamp: { type: String }
})

const model = mongoose.model('productos', schema)

class productosDAOMongo extends basicMongoDb {
    constructor(connection) {
        super(connection)
    } 

    // Listar todos los productos
    listarProductos = async () => {
        try {
            let products = await model.find({})
            return products
        } catch (error) {
            console.log('Error al listar productos (DAO): ', error)
        }
    }

    // Listar producto por codigo
    listarProductoPorCodigo = async (codigo) => {
        try {
            let resultado = await model.find({ ':codigo': codigo}, {__v: 0})
            return resultado[0]
        } catch (error) {
            console.log('Error al listar producto por codigo (DAO): ', error)
        }
    }

    // Guardar producto
    guardarProductos = async (nuevoProducto) => {
        try {
            const nuevoProd = new model(nuevoProducto)
            await nuevoProd.save()
        } catch (error) {
            console.log('Error al guardar producto (DAO): ', error)
        }
    }

    // Borrar producto por id
    borrarProductoPorId = async (id) => {
        try {
            await model.deleteOne({ _id: id})
        } catch(error) {
            console.log('Borrar producto por id (DAO): ', error)
        }
    }
}

module.exports = {productosDAOMongo, model}