const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        requred: true
    },
    duration: {
        type: Number,
        required: true
    },
    recipeType: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);