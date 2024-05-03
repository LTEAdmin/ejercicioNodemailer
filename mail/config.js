const nodemailer = require("nodemailer");
require("dotenv").config();

//configuracion de correo usando gmailde donde saldra el correo
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});
const enviarCorreo=(to, subject, html)=>{
  let mailOptions = {
    from: process.env.GMAIL_EMAIL, //Quien lo envia
    to: to, // Quien lo recibe
    subject: subject, //  Asunto
    html: html, // Cuerpo del correo
    // text: 'Prueba de correo' // Cuerpo del correo
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
module.exports = {enviarCorreo}