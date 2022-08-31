const express = require('express')
const router = express.Router()

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const dotenv = require('dotenv')
const MongoStore = require('connect-mongo')

class routerAuth {
    constructor(){ }

    start() {

        router.use(
            session({
                secret: process.env.SECRET,
                resave: false, 
                saveUninitialized: false,
                store: MongoStore.create({
                    mongoUrl: process.env.MONGO_URL,
                }),
            })
        )

        router.use(passport.initialize())
        router.use(passport.session())

        router.post('/login', (req, res, next) => {
            passport.authenticate('local-login', (error, user, options) => {
                if (user) {
                    req.logIn(user, () => {
                        return res.json(user)
                    })
                } else if (options) {
                    return res.json(options)
                }
            })(req, res, next)
        })

        router.post('/registrarse', () => {
            passport.authenticate('local-register', {
                successRedirect: '/', 
                failureRedirect: '/error', 
                passReqToCallback: true,
            })
        })

        router.get('/error', (req, res) => {
            const msg = 'Error al registrarse'
            res.json(msg)
        })

        router.get('/', (req, res) => {
            const msg = 'Registro exitoso'
            res.json(msg)
        })

        return router
    }
}
module.exports = routerAuth