const express = require("express"); 
const app = express();
const port= process.env.PORT || 3000;
//envio del correo
const enviarcorreo = (process.env.GMAIL_EMAIL_RECEIVER, "Prueba de correo", "<h1>Prueba de correo</h1>")

app.get("/", (req, res) => {
    res.send("Hola");
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});

