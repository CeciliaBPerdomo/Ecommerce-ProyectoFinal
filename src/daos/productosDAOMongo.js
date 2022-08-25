const productoBaseDAO = require('./config')
//const mongo = require('mongo')
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
/*
    constructor(nombreColeccion, schema) {  
        this.coleccion = mongoose.model(nombreColeccion, schema)
    */

    listarProductos = async () => {
        try {
            let productos = await this.coleccion.find()
            return productos
            console.log(productos)
        } catch (error) {
            console.log('Error al listar productos (DAO): ', error)
        }
    }
}

module.exports = productosDAOMongo