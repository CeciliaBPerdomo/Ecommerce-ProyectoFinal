const express = require('express')
const router = express.Router()

const controllerProducto = require('../controller/controllerProducto')

class RouterProducto {
    constructor() {
        this.controllerProducto = new controllerProducto()
    }
    start() {
        // Listar todos los productos
        router.get('/', async (req, res) => {
            const prod = await this.controllerProducto.listarProductos()
            res.json(prod)
        })

        //Guardar productos
        router.post('/guardar', async (req, res) => {
            const nuevoProducto = req.body
            const prod = await this.controllerProducto.guardarProductos(nuevoProducto)
            res.json(prod)
        })

        //Listar producto por codigo
        router.get('/:id', async (req, res) => {
            const id = req.params.id
            const prod = await this.controllerProducto.listarProductoPorId(id)
            res.json(prod)
        })

        //Borrar producto por id
        router.delete('/:id', async (req, res) => {
            const id = req.params.id
            const prod = await this.controllerProducto.borrarProductoPorId(id)
            res.json('Producto eliminado')
        })

        //Borrar todos los productos
        router.delete('/', async (req, res) => {
            await this.controllerProducto.borrarProductos()
            res.json('Todos los productos han sido borrados!')
        })

        // Actualizar producto
        router.put('/:id', async(req, res) => {
            const id = req.params.id
            const producto = req.body 
            const prod = await this.controllerProducto.actualizarProducto(id, producto)
            res.json(prod)
        })

        return router
    }
}

module.exports = RouterProducto