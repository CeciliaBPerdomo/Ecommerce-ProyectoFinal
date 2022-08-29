const productosFactoryDAO = require('../daos/productosFactory')

class apiProductos {
    constructor() {
        this.productosDAO = productosFactoryDAO.get()
    }

    // Listar todos los productos
    async listarProductos(){
        try { 
            let productos = await this.productosDAO.listarProductos()
            return productos
        } catch (error) {
            console.log('Error al listar los productos (en API): ', error)
        }
    }

    // Listar producto por codigo
    async listarProductoPorId(id){
        try { 
            let producto = await this.productosDAO.listarProductoPorId(id)
            return producto
        } catch (error) {
            console.log('Error al listar el producto por codigo (en API): ', error)
        }
    }

    // Guardar productos
    async guardarProductos(nuevoProducto){
        try { 
            let productos = await this.productosDAO.guardarProductos(nuevoProducto)
            return productos
        } catch (error) {
            console.log('Error al guardar los productos (en API): ', error)
        }
    }

    // Borrar producto por id
    async borrarProductoPorId(id){
        try { 
            let producto = await this.productosDAO.borrarProductoPorId(id)
            return producto
        } catch (error) {
            console.log('Error al borrar el producto por id (en API): ', error)
        }
    }

    // Borrar todos los productos
    async borrarProductos() {
        try {
            let producto = await this.productosDAO.borrarProductos()
            return producto
        } catch(error) {
            console.log('Error al borrar todos los productos API): ', error)
        }
    }

    // Actualizar producto
    async actualizarProducto(id, productoModif) {
        try {
            let producto = await this.productosDAO.actualizarProducto(id, productoModif)
            return producto
        } catch(error){
            console.log('Error al actualizar el producto (API): ', error)
        }
    }
}

module.exports = apiProductos