const { Router } = require('express')
const { getAllBackend, postBackend, putBackend, deleteBackend } = require('../../Backend/controller/controllerBackend')
// const { Xmark, Ymark } = require('../middleware/cors')
const cors = require('cors')


const routesBackend = Router()

routesBackend.get('/get', getAllBackend)
routesBackend.post('/post', postBackend)
// routesBackend.options('/get')
// routesBackend.options('/get')
// routesBackend.options('/delete')
routesBackend.put('/put', putBackend)
routesBackend.delete('/delete', deleteBackend)


module.exports = routesBackend