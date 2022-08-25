const { connection } = require('mongoose')
const productosDAOMongo = require('../daos/productosDAOMongo')

class productosFactoryDAO {
    static get() {
        return new productosDAOMongo()
    }
}

module.exports = productosFactoryDAO