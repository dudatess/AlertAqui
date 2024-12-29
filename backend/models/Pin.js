const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({

    disaster: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    lat:{
        type: Number,
        required: true,
    },

    long:{
        type: Number,
        required: true,
    },
},
{timestamps: true});


module.exports = mongoose.model("Pin", PinSchema);

