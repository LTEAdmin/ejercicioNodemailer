const nodemailer = require('nodemailer');
require('dotenv').config();

//configuracion de correo usando gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});

let mailOptions = {
    from: process.env.USER_EMAIL, //Quien lo envia
    to: process.env.USER_EMAIL, // Quien lo recibe
    subject: 'Prueba de correo', //  Asunto
    html: '<h1>Prueba de correo</h1>' // Cuerpo del correo
   // text: 'Prueba de correo' // Cuerpo del correo
};