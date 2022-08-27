require('dotenv').config()
const configMongo = require('../../config/configMongo')
const productosDao = require('./productosDAOMongo')
const mongoose = require('mongoose')
const configDB = require('../../config/configBD')
const productosDAOMongo = require('./productosDAOMongo')

console.log("Persistencia: ", process.env.PERSISTENCIA)

const db = async () => {
    try {
        await mongoose.connect(configDB.mongoDB.url, configDB.mongoDB.options)
    } catch (error) {
        console.log(error)
    }
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

module.exports = objProductosDao