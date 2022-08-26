const productosFactoryDAO = require('../daos/productosFactory')

class apiProductos {
    constructor(){
        this.productosDAO = productosFactoryDAO.get()
    }

    async listarProductos(){
        try { 
            let productos = await this.productosDAO.listarProductos()
            return productos
        } catch (error) {
            console.log('Error al listar los productos (en API): ', error)
        }
        
    }
}

module.exports = apiProductos