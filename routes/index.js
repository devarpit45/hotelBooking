const express = require('express')
const routes = express.Router()

const userclt = require('../controller/userclt')

console.log('routes')

routes.post('/userRegister',userclt.userRegister)

routes.post('/userLogin',userclt.userLogin)

routes.get('/getdata',userclt.getdata)

routes.use(require('../routes/booking'))

module.exports = routes