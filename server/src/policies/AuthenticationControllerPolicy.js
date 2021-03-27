const Joi = require('joi')

module.exports = {
    register (req, res, next){
     const schema = Joi.object ({
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(/^[a-zA-Z0-9]{8,32}$/)
      )
    })
        next()
    }
}