const twilio = require('twilio')
const dotenv = require('dotenv')

class smsCarrito {
    async envioSMS(celular) {
        const accountSid = process.env.TWILIO_ACCOUNT_SID
        const authToken = process.env.TWILIO_AUTH_TOKEN

        const client = twilio(accountSid, authToken)
        try {
            await client.messages
            .create({
                body: "Su compra ha sido finalizada con exito. Gracias por elegirnos!",
                from: process.env.TWILIO_PHONE_FROM,
                to: celular
            })
        } catch (error){ 
            console.log('Error al enviar mensaje de texto', error)
        }
    }
}

module.exports = smsCarrito