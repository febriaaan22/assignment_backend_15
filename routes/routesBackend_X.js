const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../controller/controllerBackend')
const settings = require('../middleware/cors')
const cors = require('cors')
const routesBackend = Router()


routesBackend.get('/get', cors(settings.Xmark), getAllBackend)
routesBackend.post('/post', cors(settings.Xmark), postBackend)
routesBackend.put('/put', cors(settings.Xmark), putBackend)
routesBackend.delete('/delete', cors(settings.Xmark), deleteBackend)


module.exports = routesBackend