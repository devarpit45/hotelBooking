const express = require('express')
const port = 8001
const app = express();
// const db = require('./config/mongoose')
const path = require('path')

const mongoose = require('mongoose')

const db = mongoose.connect('mongodb+srv://arpitshekhda45:gPbdGSGTvYJHpNev@cluster0.nwtwk.mongodb.net/Travelling')
if(db){
    console.log('db ssconnected')
}
else{
    console.log('db not conected')
}

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'
}));

// const passport = require('passport')
// const jwtstrategy = require('./config/passport-jwt')
// const session = require('express-session')

// app.use(session({
//     name:'arpit',
//     secret:'abc',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         maxAge:(1000*60*60)
//     }
// }))

// app.use(passport.initialize())
// app.use(passport.session())
app.use('/uploads', express.static(path.join(__dirname, 'model/uploads')));



app.use(express.urlencoded())
app.use('/api',require('./routes/index'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('server has been started',port)
})