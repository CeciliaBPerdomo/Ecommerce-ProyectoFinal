const apiCarrito = require('../api/apiCarrito')

class CarritosControlador { 
    constructor() {
        this.apiCarrito = new apiCarrito()
    }

    //Crear carrito nuevo
    crearCarrito = async () => {
        try {
            let carrito = await this.apiCarrito.crearCarrito()
            return carrito
        } catch (error) {
            console.log('Error al crear un nuevo carrito (Controller): ', error)
        }
    }

    // Agregar productos al carrito
    agregarProducto = async (idCarrito, producto) => {
        try {
            let nuevoProducto = await this.apiCarrito.agregarProducto(idCarrito, producto)
            console.log('Se guardo el producto correctamente en el carrito.')
            return nuevoProducto
        } catch (error) {
            console.log('Error al guardar el producto en el carrito (Controller): ', error)
        }
    } 

    // Mostrar todos los carritos
    todosLosCarritos = async () => {
        try {
            let carritos = await this.apiCarrito.todosLosCarritos()
            return carritos
        } catch (error) {
            console.log('Error al mostrar todos los carritos (Controller): ', error)   
        }
    }

    // Mostrar carrito por id 
    mostrarCarritoPorId = async (idCarrito) => {
        try {
            let carrito = await this.apiCarrito.mostrarCarritoPorId(idCarrito)
            return carrito
        } catch (error) {
            console.log('Error al mostrar carrito por id (Controller): ', error)   
        }
    }

    // Borrar producto del carrito
    borrarProductoEnCarrito = async (idCarrito, idProd) => {
        try {
            let carrito = await this.apiCarrito.borrarProductoEnCarrito(idCarrito, idProd)
            return carrito
        } catch (error){
            console.log('Error al borrar producto en carrito (Controller): ', error)   
        }
    }
}

module.exports = CarritosControlador