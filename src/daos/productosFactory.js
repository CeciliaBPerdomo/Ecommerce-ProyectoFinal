const mongoose = require('mongoose')
const {productosDAOMongo} = require('../daos/productosDAOMongo')
const config = require('../../config/configBD')

class productosFactoryDAO {
    static get() {
        const db = async() => {
            try {
                console.log("Base de datos: conectada!")
                await mongoose.connect(config.mongoDB.url, config.mongoDB.options)
            } catch (error) {
                console.log(error)
            }
        }
        return new productosDAOMongo(db())
    }
}

module.exports = productosFactoryDAO