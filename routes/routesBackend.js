const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../controller/controllerBackend')
const { Xmark, Ymark } = require('../middleware/cors')
const cors = require('cors')


const routesBackend = Router()

routesBackend.get('/get', cors(Xmark), getAllBackend)
routesBackend.post('/post', cors(Xmark), postBackend)
routesBackend.options('/put', cors(Ymark))
routesBackend.options('/delete', cors(Ymark))
routesBackend.put('/put', cors(Ymark), putBackend)
routesBackend.delete('/delete', cors(Ymark), deleteBackend)


module.exports = routesBackend