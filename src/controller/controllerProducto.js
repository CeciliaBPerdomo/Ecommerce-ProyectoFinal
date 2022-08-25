const apiProductos = require('../api/productos')

class ProductosControlador { 
    constructor() {
        this.apiProductos = new apiProductos()
    }

    // Listar productos
    listarProductos = async (req, res) => {
        try {
            let productos = await this.apiProductos.listarProductos()
            res.send(productos)
        } catch (error) {
            console('Error al listar los productos', error)
        }
    }
}

module.exports = ProductosControlador