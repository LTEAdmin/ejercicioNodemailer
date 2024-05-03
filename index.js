const express = require("express"); 
const enviarCorreo = require("./mail/config.js");
const app = express();
const port = process.env.PORT || 3000;


//envio del correo
const enviarcorreo = (process.env.GMAIL_EMAIL_RECEIVER, "Prueba de correo", "<h1>Prueba de correo</h1>")

app.get("/", (req, res) => {
    res.send("Hola");
});

app.get("/enviar", (req, res) => {
    enviarCorreo(process.env.GMAIL_EMAIL_RECEIVER, "Prueba de correo 2 desde funcion y modularizado", "<h1>Prueba de correo</h1>");
    res.send("Correo enviado");
})
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});

