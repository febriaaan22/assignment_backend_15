const express = require('express')
const routesBackend = require('../Backend/routes/routesBackend')
const applyMiddleware = require('./middleware');

const app = express()

applyMiddleware(app);

app.use(routesBackend)

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
