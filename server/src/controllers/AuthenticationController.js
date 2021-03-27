const {Client} = require('../models')
const {Artisan} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
    async register (req, res) {
        try{
            const client = await Client.create(req.body)
            res.send(client.toJSON())
        } catch (err){
            res.status(400).send({
                error : "Cette adresse mail est dèjà utilisée !"
            })
        }
    },
    async login (req, res) {
        try{
            const {email, password} = req.body
            const client = await Client.findOne({
                where: {
                    email: email
                }
            })

            if (!client) {
                return res.status(403).send({
                    error: 'Les informations de la connexion sont incorrectes'
                })
            }
            const isPasswordValid = password === client.password
            if (!isPasswordValid){
                return res.status(403).send({
                    error: 'Les informations de la connexion sont incorrectes'
                })
            }
            const clientJson = client.toJSON()
            res.send({
                client: clientJson,
                token: jwtSignUser(clientJson)
            })
        } catch (err){
            res.status(500).send({
                error : "Les informations de la connexion sont incorrectes"
            })
        }
    },
    async register_artisan (req, res) {
        try{
            const artisan = await Artisan.create(req.body)
            res.send(artisan.toJSON())
        } catch (err){
            res.status(400).send({
                error : "Cette adresse mail est dèjà utilisée !"
            })
        }
    },
    async login_artisan (req, res) {
        try{
            const {email, password} = req.body
            const artisan = await Artisan.findOne({
                where: {
                    email: email
                }
            })

            if (!artisan) {
                return res.status(403).send({
                    error: 'Les informations de la connexion sont incorrectes'
                })
            }
            const isPasswordValid = password === artisan.password
            if (!isPasswordValid){
                return res.status(403).send({
                    error: 'Les informations de la connexion sont incorrectes'
                })
            }
            const artisanJson = artisan.toJSON()
            res.send({
                client: artisanJson,
                token: jwtSignUser(artisanJson)
            })
        } catch (err){
            res.status(500).send({
                error : "Les informations de la connexion sont incorrectes"
            })
        }
    },
}