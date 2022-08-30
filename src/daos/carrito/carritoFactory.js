const mongoose = require('mongoose')
const { carritoDAOMongo } = require('../carrito/carritoDAOMongo')
const config = require('../../../config/configBD')

class carritoFactoryDAO { 
    static get() {
        const db = async() => {
            try {
                await mongoose.connect(config.mongoDB.url, config.mongoDB.options)
            } catch (error) {
                console.log('Error de conexion a la base de datos: ', error)
            }
        }
        return new carritoDAOMongo(db())
    }
}

module.exports = carritoFactoryDAO