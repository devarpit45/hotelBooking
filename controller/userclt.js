const user = require('../model/usermodel')
const bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

module.exports.getdata = async(req,res)=>{
    try{
       let showdata = await user.find();
       res.status(200).json({msg:'data request has been found',data:showdata})

    }
    catch(err){
        res.status(400).json({msg:'data request has been not found found',error:err})
    }
}

module.exports.userRegister = async(req,res)=>{
    try{
        console.log(req.body);
        let isemailexist = await user.findOne({email:req.body.email})
        if(!isemailexist){
            if(req.body.password == req.body.confirmpass){
                    let hashpass = await bcrypt.hash(req.body.password,10)
                    req.body.password = hashpass
                    let adduser = await user.create(req.body)
                    if(adduser){
                        res.status(200).json({msg:'user registered...!!!'})    
                    }
                    else{
                        res.status(200).json({msg:'user not registered...!!!'})    
                    }
            }
            else{
                res.status(200).json({msg:'password and confirmpass not match'})    
            }
        }
        else{
            res.status(200).json({msg:'email already exists'})
        }
    }
    catch(err){
        res.status(400).json({msg:'something wrong',data:err})
    }
}

module.exports.userLogin = async(req,res)=>{
    try{
        console.log(req.body);
        let checkemail = await user.findOne({email:req.body.email})
       
        if(checkemail){
            let passcheck = await bcrypt.compare(req.body.password,checkemail.password);
            console.log(passcheck)
            if(passcheck){
                let token = await jwt.sign({User: checkemail },'shhh')
                if(token){
                    res.status(400).json({msg:'user login succesfully...!!',data:token})
                }
                else{
                    res.status(400).json({msg:'user not login succesfully...!!'})
                }
            }
            else{
                res.status(400).json({msg:'password not match...!!'})
            }
        }
        else{
            res.status(400).json({msg:'user not found...!!'})
        }
    }
    catch(err){
        res.status(400).json({msg:'something wrong',data:err})
    }
}