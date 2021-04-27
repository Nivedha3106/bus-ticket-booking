const Booking = require('../models/Booking')
const Ticket = require('../models/Ticket')
const User = require('../models/User')
const login=(req,res,next) => {
    let name=req.body.name
    let password=req.body.password
    User.findOne({name:name,password:password})
    .then(response => {
        console.log(response.data)
        if(response!=null) {
            res.json({
                "res":true,
                response
            })
        }
        else {
            res.json({
                "res":false
            }) 
        }
    })
    .catch(error => {
        res.json({
            message:'An Error Occured'
        })
    })
}

const signUp = (req,res,next) => {
    let New = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPwd:req.body.confirmPwd
    })
    /*let errors=[];
    if(password !== confirmPwd){
        errors.push({msg: 'Password do not match'});
    }*/
    New.save()
    .then(response => {
        res.json({
            message:'New User Details Added!'
        })
    })

}

const index =(req,res,next)=>{
    User.find()
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
module.exports = {
    index,login,signUp
}