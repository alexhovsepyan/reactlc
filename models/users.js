const mongoose = require('mongoose')

const { Schema } = mongoose

const user = Schema({
    email: {
        type: String,
        required:true,
        unique:true
    },
    name: {
        type: String,
        default: ''
    },
    messages:{
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('user', user)