const {Favorite} = require('../models')
const {Client} = require('../models')
const {Artisan} = require('../models')
const {Comment} = require('../models')
module.exports = {
    async add_favorite(req, res) {
        try {
            const client_id = req.body['params']['id_client']
            console.log(client_id)
            const client = await Client.findOne({
                where: {
                    id: client_id
                }
            })
            console.log(client)
            const artisan_id = req.body['params']['id_artisan']
            const artisan = await Artisan.findOne({
                where: {
                    id: artisan_id
                }
            })
            console.log(artisan)
            const favorite = await Favorite.findOne({
                where: {
                    client_id: client_id,
                    artisan_id: artisan_id
                }
            })
            if (!favorite) {
                const item = {
                    'client_name': client['name'],
                    'client_email': client['email'],
                    'client_id': client['id'],
                    'artisan_name': artisan['name'],
                    'artisan_metier': artisan['metier'],
                    'artisan_phone': artisan['phone'],
                    'artisan_id': artisan['id']
                }
                const favorite = await Favorite.create(item)
                res.send(favorite.toJSON())
            } else {
                console.log("already exists")
                res.status(400).send({
                    error: "Cet artisan fait dèjà partie de vos favoris !"
                })
            }
        } catch (e) {
            res.status(400).send({
                error: "Informations incorrectes !"
            })
        }
    },
    async index(req, res) {
        try {
            let client_id = req.body['params']['client_id']
            console.log(client_id)
            let favorites = null
            favorites = await Favorite.findAll({
                where: {
                    client_id: client_id
                }
            })
            console.log(favorites)
            res.send(favorites)
        } catch (error) {
            res.status(500).send({
                error: 'an error has occured trying to fetch the artisans'
            })
        }
    },
    async add_comment(req, res) {
        try {
            console.log(req.body)
            const client_id = req.body['params']['id_client']
            const client_name = req.body['params']['name_client']
            const artisan_id = req.body['params']['id_artisan']
            const comment = req.body['params']['comment']
            const artisan = await Artisan.findOne({
                where: {
                    id: artisan_id
                }
            })
            const item = {'client_name': client_name, 'client_id': client_id, 'artisan_name': artisan['name'],
                          'artisan_id': artisan_id, 'comment': comment}
            console.log(item)
            const comment_item = await Comment.create(item)
            res.send(comment_item.toJSON())
        } catch (e) {
                res.status(500).send({
                error: 'an error has occured trying to add comment'
            })
        }
    },
    async get_comments(req, res){
        try {
            console.log("hello")
            const artisan_id = req.body['params']['id_artisan']
            console.log(artisan_id)
            const comments = await Comment.findAll({
                where: {
                    artisan_id: artisan_id
                }
            })
             res.send(comments)
        }catch (e) {
              res.status(500).send({
                error: "Cet artisan n'a pas de commentaires pour le moment, soyez le premier!"
            })
        }
    },
    async remove_favorite(req, res){
        console.log("hello")
            const favorite_id = req.body['params']['id_favorite']
        console.log(favorite_id)
        await Favorite.destroy({
                where: {
                    id: favorite_id
                }
            })
        res.send({
            'msg': 'Success'
        })
    }
}