const mongoose = require('mongoose')
const productosDAOMongo = require('../daos/productosDAOMongo')
const config = require('../../config/configBD')

class productosFactoryDAO {
    static get() {
        const db = async() => {
            return await mongoose.connect(config.mongoDB.url, config.mongoDB.options)
        }
        console.log(db)
        return new productosDAOMongo(db)
    }
}

module.exports = productosFactoryDAO