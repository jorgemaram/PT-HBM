const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },

    manufacturer: {
        type: String,
        trim: true,
        required: true,
    },

    description: {
        type: String,
        trim: true,
        required: true,
    },

    active: {
        type: Boolean,
        trim: true,
        required: true,
    },

    rate: {
        type: Number,
        required: true,
    },

    imageFileName: {
        type: String,
    },

    origin: {
        type: String,
        trim: true,
        required: true,
    }

}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;