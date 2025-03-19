const passport = require('passport')
const jwtstrategy = require('passport-jwt').Strategy;
const extrajwt = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest : extrajwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'shhh'
}

const user = require('../model/usermodel')

passport.use(new jwtstrategy(opts, async function(payload,done){
    let userdata = await user.findOne({email:payload.user.email})
    if(userdata){
        return done(null,userdata)
    }
    else{
        return done(null,false)
    }

}))

module.exports = passport