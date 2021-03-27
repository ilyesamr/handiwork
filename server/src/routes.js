const AuthenticationController = require('./controllers/AuthenticationController')
const ArtisansControllers = require('./controllers/ArtisansController')
const ClientsController = require('./controllers/ClientsControllers')
module.exports = (app) => {
    app.post('/register-client', AuthenticationController.register)
    app.post('/login-client', AuthenticationController.login)
    app.post('/register-artisan', AuthenticationController.register_artisan)
    app.post('/login-artisan', AuthenticationController.login_artisan)
    app.get('/get-artisans', ArtisansControllers.index)
    app.post('/reserve-artisan', ArtisansControllers.reserve)
    app.get('/get-offers-clients', ArtisansControllers.show_for_clients)
    app.get('/get-offers-artisans', ArtisansControllers.show_for_artisans)
    app.post('/add-favorite', ClientsController.add_favorite)
    app.post('/get-favorites', ClientsController.index)
    app.post('/add-comment', ClientsController.add_comment)
    app.post('/get-comments', ClientsController.get_comments)
    app.post('/get-messages-artisans', ArtisansControllers.get_messages)
    app.post('/remove-favorite', ClientsController.remove_favorite)
}