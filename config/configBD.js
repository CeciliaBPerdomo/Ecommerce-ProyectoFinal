const dotenv = require('dotenv')

const configDB = {
    mongoDB: {
        url: process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}

module.exports = configDB