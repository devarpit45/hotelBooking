const flight = require('../model/booking/flight')
const hotel = require('../model/booking/hotel')
const path = require('path')

module.exports.gethotel = async(req,res)=>{
    try{
       let showdata = await hotel.find();
       res.status(200).json({msg:' DATA FOUND',data:showdata})

    }
    catch(err){
        res.status(400).json({msg:'data request has been not found found',error:err})
    }
}
module.exports.getflight = async(req,res)=>{
    try{
       let getdata = await flight.find();
       res.status(200).json({msg:' DATA FOUND',data:getdata})

    }
    catch(err){
        res.status(400).json({msg:'data request has been not found found',error:err})
    }
}

module.exports.AddFlight = async(req,res)=>{
    try{
        console.log(req.body)
        let addflight = await flight.create(req.body);
        if(addflight){
            res.status(200).json({msg:'flight added sucessfully ...!',data:addflight})
        }
        else{
            res.status(200).json({msg:'flight not added'})
        }
    }
    catch(err){
        res.status(400).json({msg:err})
    }
}

module.exports.AddHotel = async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.file);
        let img = ''
        if(req.file){
            img = await hotel.imagepath+'/'+req.file.filename

        }
        req.body.image = img
        let addhotel = await hotel.create(req.body)
        if(addhotel){

            res.status(400).json({msg:'hotel  added',data:addhotel}) 
        }
        else{
            res.status(400).json({msg:'hotel not added'}) 
        }
      
    }
    catch(err){
        res.status(400).json({msg:err}) 
    }
}