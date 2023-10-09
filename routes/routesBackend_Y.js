const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../controller/controllerBackend')
const settings = require('../middleware/cors')
const cors = require('cors')
const routesBackend = Router()



routesBackend.get('/gety', cors(settings.Ymark), getAllBackend)
routesBackend.post('/posty', cors(settings.Ymark), postBackend)
routesBackend.put('/puty', cors(settings.Ymark), putBackend)
routesBackend.delete('/deletey', cors(settings.Ymark), deleteBackend)
routesBackend.options('/puty', cors(settings.Ymark), putBackend)
routesBackend.options('/deletey', cors(settings.Ymark), deleteBackend)


module.exports = routesBackend