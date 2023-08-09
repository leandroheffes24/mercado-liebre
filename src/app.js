const express = require("express")
const path = require("path")
const app = express()

// RUTA PÚBLICA ESTÁTICA
app.use(express.static(path.join(__dirname, "../public")))

//INICIAR SERVIDOR
const PORT = 3000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))

// RUTAS
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views/home.html")))