console.log("Servdor de NodeJs")
const conexion = require("./database/peliculas");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/peliculas");

conexion();

const port = 3900;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);

app.get("/prueba", (req, res) => {
    return res.status(200).send({
        message: "Prueba"
    })
})

app.listen(port, () =>{
    console.log("Servidor escuchando el puerto: "+port);
})