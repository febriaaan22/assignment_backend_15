const express = require('express')
const routesBackendX = require('./routes/routesBackend_X')
const routesBackendY = require('./routes/routesBackend_Y')
const applyMiddleware = require('./middleware');
const cors = require('cors')

const app = express()

applyMiddleware(app);

app.use('/user', routesBackendX)
app.use('/usery', routesBackendY)

const whitelist = ['https://assignment-backend-15-vj8i.vercel.app/', 'https://assignment-frontend-15.vercel.app/']
const corsOptionsDelegate =  function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
    } else {
    corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}


// app.use('/user', routesBackendX)
// app.use('/usery', routesBackendY)
// // app.use(cors())

const requestIdMiddleware = (req, res, next) => {
    if (req.headers['x-request-id']) {
        res.setHeader("x-request-id", req.headers['x-request-id'])
        req.request_id = req.headers['x-request-id']
    } else {
        const uuid = uuidv4()
        res.setHeader("x-request-id", uuid)
        req.request_id = uuid
    }
    next()
}

app.get('/', (req, res) => {
    res.send('Assignment Week 15! CORS')
});

app.get('/request', requestIdMiddleware, (req, res) => {
    console.log(req.headers)
    res.send('Assignment Week 15! CORS')
});


app.listen(3000, () =>
    console.log('Server is running on port 3000')
)