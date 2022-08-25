const configDB = {
    mongoDB: {
        url: 'mongodb://localhost:27017',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log(err));

//console.log('Base de datos conectada a: ', configDB.mongoDB.url)
module.exports = configDB