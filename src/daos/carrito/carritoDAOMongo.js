const mongoose = require('mongoose')
const basicMongoDb = require('../../../config/configMongo')
const path = require('path')

// Schema de los carritos
const schema = new mongoose.Schema({
    id: { type: Number, required: true },
	timestamp: { type: String },
	productos: { type: Array }
})

const model = mongoose.model('carrito', schema)

class carritoDAOMongo extends basicMongoDb {
    constructor(connection) {
        super(connection)
    }

    //Agregar un producto al carrito
    agregarProducto = async(idCarrito, producto) => {
        try {
            const carrito = await this.todosLosCarritos()
            const indiceCarrito = carrito.findIndex((e => e.id === Number(idCarrito)))
            const nuevoProducto = carrito[indiceCarrito].productos
            if (carrito[indiceCarrito].productos.length === 0) {
                producto.id = 1
            } else { 
                producto.id = carrito[indiceCarrito].productos.length + 1
            }
            producto.timestamp = Date().toString()
            nuevoProducto.push(producto)
            await model.updateOne(
                {id: idCarrito}, 
                { $set: { productos: nuevoProducto }}
            )
        } catch (error){
            console.log('Error agregando producto en el carrito (DAO): ', error)
        }
    }

    // Crea un nuevo carrito
    crearCarrito = async () => {
        try {
            const carritos = await this.todosLosCarritos()
            if (carritos.length === 0) {
                const carrito = {
                    id: 1,
                    timestamp: Date().toString(),
                    productos: []
                } 
                const nuevoCarrito = new model(carrito)
                await nuevoCarrito.save()
                return nuevoCarrito
            } else {
                const carrito = {
                    id: carritos.length + 1,
                    timestamp: Date().toString(),
                    productos: []
                }
                const nuevoCarrito = new model(carrito)
                await nuevoCarrito.save()
                return nuevoCarrito 
            }
        } catch (error){
            console.log('Error al crear carrito (DAO): ', error)
        }
    }

    todosLosCarritos = async () => {
        try {
            let carritos = await model.find({})
            return carritos
        } catch (error) {
            console.log('Error al ver los carritos (DAO): ', error)
        }
    }

    mostrarCarritoPorId = async (id) => {
        try {
            const carrito = await model.findOne({ id: id})
            const productos = carrito?.productos
            if (productos){
                return productos
            } else {
                const msg = 'No existe el carrito'
                return msg
            }
            //return carrito
        } catch (error) { 
            console.log('Error al ver el carrito por id (DAO): ', error)
        }
    }

    borrarProductoEnCarrito = async (idCarrito, prodId) => {
        try {
            const carrito = await this.todosLosCarritos()
            const indiceCarrito = carrito.findIndex((e => e.id === Number(idCarrito)))
            
            if (indiceCarrito >= 0) {
                const productoCarrito = carrito[indiceCarrito].productos
                const productoBorrado = productoCarrito.findIndex((e => e.id === Number(prodId)))
                if (productoBorrado >= 0){
                    productoCarrito.splice(productoBorrado, 1)
                    await model.updateOne(
                        {id: idCarrito},
                        {$set: {productos: productoCarrito}} 
                    )   
                }
                const msg = 'Producto eliminado'
                return msg
            } else {
                const msg = 'Producto NO eliminado'
                return msg
            }
        } catch (error) {
            console.log('Error al borrar producto en el carrito (DAO): ', error)
        }
    }

    borrarCarritoPorId = async(idCarrito) => {
        try {
            await model.deleteOne({ id: idCarrito })
        } catch (error){
            console.log('Error al borrar el carrito (DAO): ', error)
        }
    }
}

module.exports = { carritoDAOMongo, model }