const nodemailer = require('nodemailer');

//configuracion de correo usando gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});