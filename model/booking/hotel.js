const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const imagePath = '/uploads'

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    roomsAvailable:{
        type:String,
        required:true
    },
    pricePerNight:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
   
    status:{
        type:Boolean,
        default:true,

    }

},
 {timestamps:true}
)

const storagedata = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'..',imagePath))
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
    
})
  
hotelSchema.statics.UploadImage = multer({storage:storagedata}).single('image')
hotelSchema.statics.imagepath = imagePath



const hotel = mongoose.model('hotel',hotelSchema)
module.exports = hotel