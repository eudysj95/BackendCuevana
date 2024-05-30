const { Schema, model } = require("mongoose");

const PeliSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = model("Peliculas", PeliSchema);