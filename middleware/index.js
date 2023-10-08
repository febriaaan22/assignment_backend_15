const applyHelmet = require('./helmet');
const applyMorgan = require('./morgan');


module.exports = (app) => {
    applyHelmet(app);
    applyMorgan(app);
    
}
