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
        router.get('/:codigo', async (req, res) => {
            const codigo = req.params.codigo
            const prod = await this.controllerProducto.listarProductoPorCodigo(codigo)
            res.json(prod)
        })


        //Borrar producto por id
        router.delete('/:id', async (req, res) => {
            const id = req.params.id
            console.log(id)
            const prod = await this.controllerProducto.borrarProductoPorId(id)
            res.json(prod)
        })

        return router
    }
}

module.exports = RouterProducto