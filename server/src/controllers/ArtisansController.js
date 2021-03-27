const {Artisan} = require('../models');
const {Offer} = require('../models')
const {Comment} = require('../models')
module.exports = {
    async index(req, res) {
        try {
            let bricoleurs = null
            bricoleurs = await Artisan.findAll({
            limit: 100
        })
            let mylist = []
            bricoleurs.forEach(element=>{
                let item = {'id': element['id'], 'name': element['name'], 'metier': element['metier'], 'phone': element['phone'],
                            'region': element['region'], 'membre_depuis': element['createdAt']}
                mylist.push(item)
            })
            res.send(mylist)
        }catch (error){
            res.status(500).send({
            error: 'an error has occured trying to fetch the artisans'
          })
        }
    },
    async reserve(req, res){
           try{
            const offer = await Offer.create(req.body)
            res.send(offer.toJSON())
        } catch (err){
            res.status(400).send({
                error : "Informations incorrectes !"
            })
        }
    },
    async show_for_clients(req, res){
        let my_id = req.query['client_id']
        let offers = null
        offers = await Offer.findAll({
          where: {
                    client_id: my_id
                }
        })
        console.log(offers)
        res.send(offers)
    },
    async show_for_artisans(req, res){
        const artisan_id = req.query['artisan_id']
        let offers = null
        offers = await Offer.findAll({
          where: {
                    artisan_id: artisan_id
                }
        })
        res.send(offers)
    },
    async get_messages(req, res){
        console.log("heyy")
        console.log(req.body['params']['id_artisan'])
        const artisan_id = req.body['params']['id_artisan']
        const messages = await Comment.findAll({
                where: {
                    artisan_id: artisan_id
                }
            })
        console.log(messages)
        res.send(messages)
    }
}