const apiProductos = require('../api/productos')

class ProductosControlador{ 
    constructor() {
        this.apiProductos = new apiProductos()
    }

    // Listar productos
    listarProductos = async() => {
        try {
            let productos = await this.apiProductos.listarProductos()
            return productos
        } catch (error) {
            console.log('Error al listar los productos (Controller): ', error)
        }
    }

    //Listar producto por codigo
    listarProductoPorId = async(id) => {
        try {
            let producto = await this.apiProductos.listarProductoPorId(id)
            return producto
        } catch (error) {
            console.log('Error al listar los productos (Controller): ', error)
        }
    }

    // Guardar los productos
    guardarProductos = async(nuevoProducto) => {
        try {
            let productos = await this.apiProductos.guardarProductos(nuevoProducto);
            return productos
        } catch (error) {
            console.log('Error al guardar los productos (Controller): ', error)
        }
    }

    //Borrar producto por id
    borrarProductoPorId = async(id) => {
        try {
            let producto = await this.apiProductos.borrarProductoPorId(id)
            return producto
        } catch (error) {
            console.log('Error al borrar producto por id (Controller): ', error)
        }
    }

    //Borrar producto por id
    borrarProductos = async() => {
        try {
            let producto = await this.apiProductos.borrarProductos()
            return producto
        } catch (error) {
            console.log('Error al borrar todos los productos (Controller): ', error)
        }
    }

    // Actualizar producto
    actualizarProducto = async(id, productoModif) => {
        try {
            let producto = await this.apiProductos.actualizarProducto(id, productoModif)
            return producto
        } catch(error){ 
            console.log('Error al actualizar el producto (Controller): ', error)
        }
    }
}

module.exports = ProductosControlador