const mongoose = require('mongoose')
require('dotenv').config()

class basicMongoDb {
    constructor(connection) {
        if (!process.env.MONGO_CONNECT) {
            this.connect = connection
            process.env.MONGO_CONNECT = true
            console.log(this.connect)
        }
    }
}

module.exports = basicMongoDb