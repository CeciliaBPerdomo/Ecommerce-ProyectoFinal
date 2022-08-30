const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

class envioMail {
    async mail(mail) {
        if(mail){
            const transporter = nodemailer.createTransport({
                host: process.env.TRANSPORTER_HOST,
                port: process.env.TRANSPORTER_PORT,
                secure: false,
                auth: {
                    user: process.env.TRANSPORTER_USER,
                    pass: process.env.TRANSPORTER_USER_PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            })

            await transporter.sendMail({
                from: "E-Commerce", 
                to: mail,
                subject: "Compra finalizada",
                text: "Su compra fue realizada con exito. Gracias por elegirnos!"
            })
        } else {
            const msg = 'Debe ingresar el mail'
            return msg
        }
    }
}

module.exports = envioMail