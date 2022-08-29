const carritoFactoryDAO = require('../../src/daos/carrito/carritoFactory')

class apiCarrito {
    constructor() {
        this.carritoDAO = carritoFactoryDAO.get()
    }

    // Crear nuevo carrito 
    async crearCarrito () {
        try {
            let carrito = await this.carritoDAO.crearCarrito()
            return carrito
        } catch (error) {
            console.log('Error al crear un nuevo carrito (API): ', error)
        }
    }

    // Agregar productos a carrito
    async agregarProducto (idCarrito, producto) {
        try {
            let nuevoProducto = await this.carritoDAO.agregarProducto(idCarrito, producto)
            return nuevoProducto
        } catch(error) {
            console.log('Error al agregar un nuevo producto (API): ', error)
        }
    }

    //Muestra todos los carritos
    async todosLosCarritos () {
        try {
            let carritos = await this.carritoDAO.todosLosCarritos()
            return carritos
        } catch (error){
            console.log('Error al mostrar todos los carritos (API):', error)
        }
    }

    // Muestra el carrito por el id
    async mostrarCarritoPorId (idCarrito) {
        try {
            let carrito = await this.carritoDAO.mostrarCarritoPorId(idCarrito)
            return carrito
        } catch (error) {
            console.log('Error al mostrar el carrito por su id (API):', error)
        }
    }

    // Borrar producto 
    async borrarProductoEnCarrito (idCarrito, idProd) {
        try {
            let carrito = await this.carritoDAO.borrarProductoEnCarrito(idCarrito, idProd)
            return carrito
        } catch (error) {
            console.log('Error al borrar producto en carrito (API):', error)
        }
    }
}

module.exports = apiCarrito