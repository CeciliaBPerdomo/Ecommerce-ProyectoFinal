const express = require('express')
const router = express.Router()

const controllerProducto = require('../controller/controllerProducto')

class RouterProducto {
    constructor() {
        this.controllerProducto = new controllerProducto()
    }
    start() {
        router.get('/', this.controllerProducto.listarProductos())
        return router
    }
}

module.exports = RouterProducto