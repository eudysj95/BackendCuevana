const prueba = (req, res) => {
    return res.status(200).json({
        message: "Prueba controller"
    })
}

module.exports = {
    prueba
}