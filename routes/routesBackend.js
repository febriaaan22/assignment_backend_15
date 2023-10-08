const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../controller/controllerBackend')
const { Xmark, Ymark } = require('../middleware/cors')
const cors = require('cors')


const routesBackend = Router()

routesBackend.get('/get', cors(Xmark), getAllBackend)
routesBackend.post('/post', cors(Xmark), postBackend)

routesBackend.get('/gety', cors(Ymark), getAllBackend)
routesBackend.post('/posty', cors(Ymark), postBackend)
routesBackend.put('/puty', cors(Ymark), putBackend)
routesBackend.delete('/deletey', cors(Ymark), deleteBackend)


module.exports = routesBackend