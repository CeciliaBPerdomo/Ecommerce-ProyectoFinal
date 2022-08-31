const express = require('express')
const router = express.Router()

const controllerCarrito = require('../controller/controllerCarrito')

class RouterCarrito {
    constructor() {
        this.controllerCarrito = new controllerCarrito()
    }

    start() {
        // Nuevo carrito 
        router.post('/nuevoCarrito', async(req, res) => {
            const nuevoCarrito = await this.controllerCarrito.crearCarrito()
            res.json(nuevoCarrito)
        })

        // Agregar producto a un carrito
        router.post('/agregarProducto/:id', async(req, res) => {
            const idCarrito = req.params.id
            const producto = req.body
            await this.controllerCarrito.agregarProducto(idCarrito, producto)
            
            // Muestra el carrito actualizado 
            const carritoActualizado = await this.controllerCarrito.mostrarCarritoPorId(idCarrito)
            res.json(carritoActualizado)
        })

        // Muestra todos los carritos 
        router.get('/', async(req, res) => {
            const carritos = await this.controllerCarrito.todosLosCarritos()
            res.json(carritos)
        })

        // Muestra el carrito segun el id
        router.get('/:id', async(req, res) => {
            const idCarrito = req.params.id
            const carrito = await this.controllerCarrito.mostrarCarritoPorId(idCarrito)
            res.json(carrito)
        })

        // Elimina un producto del carrito
        router.delete('/:idCarrito/:idProducto', async(req, res) => {
            const idCarrito = req.params.idCarrito
            const idProducto = req.params.idProducto
            await this.controllerCarrito.borrarProductoEnCarrito(idCarrito, idProducto) 

            // Muestra el carrito actualizado
            const carritoActualizado = await this.controllerCarrito.mostrarCarritoPorId(idCarrito)
            res.json(carritoActualizado)
        })

        //Finalizar compra con id de carrito y envio de mensaje
        router.put('/finalizarCompra/:idCarrito', async (req, res) => {
            // Envia mail de la compra
            const mail = req.body.mail
            await this.controllerCarrito.envioMail(mail)

            //Envia sms
            const celular = req.body.celular
            await this.controllerCarrito.envioSMS(celular)

            //Borra el carrito
            const idCarrito = req.params.idCarrito
            await this.controllerCarrito.borrarCarritoPorId(idCarrito)
            res.json('Compra finalizada')
        })
    
        return router
    }
}

module.exports = RouterCarrito