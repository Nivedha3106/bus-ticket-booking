const Booking = require('../models/Booking')
const Ticket = require('../models/Ticket')
//Show the seat avaliable
const index =(req,res,next)=>{


    Booking.find()
    .then(response =>{
        res.json({
            response
        })
   })
    .catch(error => {
        res.join({
            message : "An error occured"
        })
    })
    
}
//Show single item
const show =(req,res,nex)=>{
    let bookingID =req.params.bookingID
    Booking.findById(bookingID)
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

const store = (req,res,next) => {
    let booking = new Booking({
        name: req.body.name,
        source:req.body.source,
        dest:req.body.dest,
        fare:req.body.fare,
        time:req.body.time
        
    })
    booking.save()

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


//update the seats

const update =(req,res,next)=>{
    let bookingID =req.body.bookingID

    let updatedData ={
        name: req.body.name,
        source: req.body.source,
        dest:req.body.dest,
        fare: req.body.fare,
        time:req.body.time
        
    }
    // Booking.findByIdAndUpdate(bookingID, {$set: updatedData})
    Booking.findByIdAndUpdate(bookingID, {$set: updatedData}, {new:true})
    .then(()=>{
        res.json({
            message :'Booking updated Successfully'
        })
    })
    .catch(error =>{
        message: 'An error occured'
    })
}

//delete the seat
const destroy =(req,res,next) =>{
    let bookingID =req.bookingID
    Booking.findByIdAndRemove(bookingID)
    .then(()=>{
        res.json({
            message: 'Booking deleted successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occured'
        })
    })
}

const countTickets = (req,res,next) => {
    let bookingID=req.params.bookingID
    Booking.findById(bookingID)
    .then(response => {
        let arr=response.Booked
        var j=0
        var k=0
        var openTickets = []
        var closeTickets= []
        for(var i=0;i<arr.length;i++) {
            if(arr[i].status=="Open") {
                openTickets[j]=arr[i].name
                j=j+1
            }
            else if(arr[i].status=="closed") {
                closeTickets[k]=arr[i].name
                k=k+1
            }
        }
        res.json({
            "open_Tickets":openTickets,
            "closed_Tickets":closeTickets
        })
    })
    .catch(error => {
        res.json({
            message:'error'
        })   
    })
}

//To view closed tickets

const clear =(req,res,next) =>{
    // let bookingID=req.params.bookingID
    req.body.Username==process.env.username && req.body.Password== process.env.password
    booking.deleteMany({})
    .then(() =>()=>{
        res.json({
            messsage :"All cleared"
        })
    })
}

module.exports = {

    index,show,store,update,destroy,clear,countTickets
}