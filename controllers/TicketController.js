const Ticket = require('../models/Ticket')

const Booking = require('../models/Booking')
require('dotenv/config')
//Show the ticket
const index =(req,res,next)=>{
     Ticket.find()
     .then(response =>{
         res.json({
             response
         })
    })
    .catch(error =>{
         res.json({
             message : 'An error occured'
         })
     })
 }
//Show single ticket
const show =(req,res,nex)=>{
    let ticketID =req.params.ticketID
    Ticket.findById(ticketID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
        
    })
}
//add new ticket
const store = (req,res,next)=>{
    let ticket = new Ticket({
        name: req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        source:req.body.source,
        dest:req.body.dest
        
    })
    ticket.save()

    .then(response =>{
        res.json({
            message: 'Ticket added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

//update the ticket

const update =(req,res,next)=>{
    let ticketID =req.params.ticketID

    let updatedData ={
        name: req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        source:req.body.source,
        dest:req.body.dest
        
    }
    Ticket.findByIdAndUpdate(ticketID, {$set: updatedData})
    .then(()=>{
        res.json({
            message :'Ticket updated Successfully'
        })
    })
    .catch(error =>{
        message: 'An error occured'
    })
}

//delete the ticket
const destroy =(req,res,next) =>{
    let ticketID =req.body.ticketID
    Ticket.findByIdAndRemove(ticketID)
    .then(()=>{
        res.json({
            message: 'Ticket deleted successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports ={

    index,show,store,update,destroy
}