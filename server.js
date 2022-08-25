/* Entrega final E-commerce*/
console.log('E-commerce: Cecilia Perdomo')

const express = require('express')
const cors = require('cors')
require('dotenv').config()
const productoRoutes = require('./src/routes/productoRoutes')

const config = require('./config/config')
const app = express()

if(config.NODE_ENV == 'development') app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ----------------------------------------------------------- */ 
/*                     MANEJO DE RUTAS                         */
/* ----------------------------------------------------------- */

/* Productos */ 
const productoRouter = new productoRoutes()
app.use('/productos', productoRouter.start())

/* ----------------------------------------------------------- */ 
/*                     SERVER LISTEN                           */
/* ----------------------------------------------------------- */

const PORT = config.PORT || 8080
const srv = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT} (${config.NODE_ENV})`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))