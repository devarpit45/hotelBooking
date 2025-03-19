const express = require('express')
const routes = express.Router()
const passport = require('passport')

const booking = require('../controller/bookingclt')
const hotel = require('../model/booking/hotel')

console.log('book')


routes.post('/AddFlight',booking.AddFlight)

routes.post('/AddHotel',hotel.UploadImage,booking.AddHotel)

routes.get('/gethotel',booking.gethotel)
routes.get('/getflight',booking.getflight)

module.exports = routes