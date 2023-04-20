const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    platform:{
        type: String,
        required: true
    },
    by:{
        type: String,
        required: true
    },
    similar:{
        type: String
    },
});

module.exports = Show = mongoose.model('show', ShowSchema);