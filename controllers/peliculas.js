const Peliculas = require("../models/Peliculas");
const validator = require("validator");


const crear = (req, res) => {

    let parametros = req.body;
    let peliculas = new Peliculas(parametros);

    try{
        let valiTitle = !validator.isEmpty(parametros.title);
        let valiDescription = !validator.isEmpty(parametros.description);

        if(!valiTitle || !valiDescription){
            throw new Error("No se ha validado la informacion")
        }

    }catch(error){
        console.log(error);
        return res.status(400).json({
            status: "error",
            message: "Datos incompletos"
        })
    }

    peliculas.save().then(() => {
        return res.status(200).json({
            status: "succes",
            body: req.body
        })
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "No se ha podido guardar la pelicula"
        })
    })

    
}

const listar = async(req, res) => {

    try{

        let consulta = await Peliculas.find({}).sort({date: -1});
        return res.status(200).json({
            status: "succes",
            data: consulta
        })

    }catch(error){

        return res.status(404).json({
            status: "error",
            message: "No se han podido listar las peliculas"
        })
    }
    
}

const listarUno = async(req, res) => {

    let id = req.params.id;

    let consulta = await Peliculas.findOne({_id: id});
    

    return res.status(200).json({
        status: "succes",
        data: consulta
    })
}

const borrar = async(req, res) => {

    let id = req.params.id;

    await Peliculas.findOneAndDelete({_id: id}).then(() => {
        return res.status(200).json({
            status: "succes",
            message: "Pelicula eliminada",
            id
        })
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "No se ha podido eliminar el elemento"
        })
    })

    
}

const editar = async(req, res) => {

    let id = req.params.id;
    let parametros = req.body;

    try{
        let valiTitle = !validator.isEmpty(parametros.title);
        let valiDescription = !validator.isEmpty(parametros.description);

        if(!valiTitle || !valiDescription){
            throw new Error("No se ha validado la informacion")
        }

    }catch(error){
        console.log(error);
        return res.status(400).json({
            status: "error",
            message: "Datos incompletos"
        })
    }

    await Peliculas.findOneAndUpdate({_id: id}, parametros).then(() => {
        return res.status(200).json({
            status: "succes",
            id
        })
    })
    .catch((error) => {
        console.log(error);
        return res.status(500).json({
            status: "error",
            message: "No se ha podido editar"
        })
    })

    

}

module.exports = {
    crear,
    listar,
    listarUno,
    borrar,
    editar
}