const mongoose = require('mongoose')
const basicMongoDb = require('../../config/configMongo')
const path = require('path')

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
            console.log('Productos listados con exito')
            return products
        } catch (error) {
            console.log('Error al listar productos (DAO): ', error)
        }
    }

    // Listar producto por codigo
    listarProductoPorId = async (id) => {
        try {
            const valido = mongoose.Types.ObjectId.isValid(id)
            if (valido) {
                let resultado = await model.find({ ':id': id}, {__v: 0})
                console.log('Producto listado por id con exito')
                return resultado[0]
            } else {
                let msg = 'No existe el producto con ese id'
                return msg
            }
        } catch (error) {
            console.log('Error al listar producto por codigo (DAO): ', error)
        }
    }

    // Guardar producto
    guardarProductos = async (nuevoProducto) => {
        try {
            const nuevoProd = new model(nuevoProducto)
            await nuevoProd.save()
            console.log('Producto guardado con exito')
            return nuevoProducto
        } catch (error) {
            console.log('Error al guardar producto (DAO): ', error)
        }
    }

    // Borrar producto por id
    borrarProductoPorId = async (id) => {
        try {
            await model.deleteOne({ _id: id })
        } catch(error) {
            console.log('Error al borrar producto por id (DAO): ', error)
        }
    }

    // Borrar todos los productos
    borrarProductos = async () => {
        try {
            const resultado = await model.deleteMany({})
            return resultado
        } catch (error) {
            console.log('Error al borrar todos los productos(DAO): ', error)
        }
    }

    // Actualizar producto
    actualizarProducto = async (id, nuevoProducto) => {
        try {
            const { nombre, descripcion, codigo, foto, precio, stock } = nuevoProducto
            await model.updateOne({ _id: id }, {
                $set: {
                    nombre: nombre,
                    descripcion: descripcion,
                    codigo: codigo,
                    foto: foto,
                    precio: precio,
                    stock: stock,
                    timestamp: new Date().toString()
                }
            })
            console.log('Producto actualizado con exito')
            return nuevoProducto
        } catch (error) {
            console.log('Error al actualizar el producto (DAO): ', error)
        }
    }
}

module.exports = {productosDAOMongo, model}