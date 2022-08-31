/* Entrega final E-commerce*/
console.log('  ')
console.log('----------------------------------')
console.log('     Proyecto final - Backend')
console.log('  E-commerce: by Cecilia Perdomo')
console.log('----------------------------------')
console.log('  ')

const express = require('express')
const cors = require('cors')
require('dotenv').config()

/* Routes */
const productoRoutes = require('./src/routes/productoRoutes')
const carritoRoutes = require('./src/routes/carritoRoutes')
const authRoutes = require('./src/routes/authRoutes')

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
app.use('/productos',  productoRouter.start())


/* Carritos */
const carritoRouter = new carritoRoutes()
app.use('/carrito', carritoRouter.start())


/* Autenticacion de usuarios */ 
const authRouter = new authRoutes()
app.use('/login', authRouter.start())

/* ----------------------------------------------------------- */ 
/*                     SERVER LISTEN                           */
/* ----------------------------------------------------------- */

const PORT = config.PORT || 8080
const srv = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT} (${config.NODE_ENV})`)
})
srv.on('error', error => console.log(`Error en el servidor ${error}`))