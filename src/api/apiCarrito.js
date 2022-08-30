const carritoFactoryDAO = require('../../src/daos/carrito/carritoFactory')
const mensajeCarrito = require('../daos/carrito/mensajeCarrito')
const smsCarrito = require('../daos/carrito/smsCarrito')

class apiCarrito {
    constructor() {
        this.carritoDAO = carritoFactoryDAO.get()
        this.mensajeCarrito = new mensajeCarrito()
        this.smsCarrito = new smsCarrito()
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

    // Borrar carrito por id
    async borrarCarritoPorId (idCarrito){
        try {
            await this.carritoDAO.borrarCarritoPorId(idCarrito)
        } catch (error){
            console.log('Error al borrar carrito por id (API): ', error)
        }
    }

    // Envio de mails
    async envioMail(mail){
        try {
            await this.mensajeCarrito.mail(mail)
        } catch(error){
            console.log('Error al al enviar mail (API): ', error)
        }
    }

    //Envio de sms 
    async envioSMS(celular){
        try {
            await this.smsCarrito.envioSMS(celular)
        } catch (error) {
            console.log('Error al al enviar SMS (API): ', error)
        }
    }
}

module.exports = apiCarrito