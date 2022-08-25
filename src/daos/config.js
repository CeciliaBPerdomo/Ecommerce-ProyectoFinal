require('dotenv').config()
const configMongo = require('../../config/configMongo')
const productosDao = require('./productosDAOMongo')
const mongoose = require('mongoose')
const configDB = require('../../config/configBD')
//const productosDAOMongo = require('./productosDAOMongo')

console.log("Persistencia: ", process.env.PERSISTENCIA)

const db = async () => {
    return await mongoose.connect(config.mongoDB.url, config.mongoDB.options)
    console.log('db')
}

//let objProductosDAO = {}  

switch (process.env.PERSISTENCIA) { 
    case 'MongoDB':
        //let productosDAO = new productosDAO()
        let objProductosDAO = new productosDao(db)
        break
    default:
        console.log('No hay base de datos por defecto')
        break
}

module.exports = { objProductosDao }


/*class Productos extends configMongo {
    constructor(connection) {
        super(connection)
    }

    listarProductos = async () => { 
        try {
            return await model.find({})
        } catch(error) {
            console.log('Error al listar productos (DAO): ', error)
        }
    }
}

module.exports = Productos*/