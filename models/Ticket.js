const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = Schema({
    name:{
        type: String,
    },
    age:{
        type: String,
    },
    email:{
        type: String,
        
    },
    phone:{
        type: String,
        
    },
    source:{
        type:String,
    },
    dest:{
        type:String,
    },
    time:{
        type:String,
    }
})

const Ticket = mongoose.model('Ticket',ticketSchema)
module.exports = Ticket