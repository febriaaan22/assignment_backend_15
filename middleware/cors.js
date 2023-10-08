const Xmark = {
        origin: ['*', 'https://assignment-week-15-fe-x.netlify.app'],
        methods: ['GET', 'POST']
}
const Ymark = {
        origin: ['https://assignment-week-15-fe-y.netlify.app','*'],
        methods: ['GET', 'POST', 'PUT', 'DELETE']
}

module.exports = { Xmark, Ymark }