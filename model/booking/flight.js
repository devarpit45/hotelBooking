const mongoose = require('mongoose')
const flightSchema = mongoose.Schema({
    airline:{
        type:String,
        required:true
    },
    flightNumber:{
        type:String,
        required:true
    },
    departureTime:{
        type:String,
        required:true
    },
    arrivalTime:{
        type:String,
        required:true
    },
    departureAirport:{
        type:String,
        required:true
    },
    arrivalAirport:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        default:true,

    }

},
 {timestamps:true}
)

const flight = mongoose.model('flight',flightSchema)
module.exports = flight