const configDB = {
    mongoDB: {
        url: 'mongodb://localhost:27017',
        options: {
            useUnifiedTopology: true
        }
    }
}

console.log('Base de datos conectada a: ', configDB.mongoDB.url)
module.exports = configDB