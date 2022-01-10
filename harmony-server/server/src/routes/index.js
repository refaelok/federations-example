/**
 * Main application routes
**/
const config = require('../config');
const baseAPI = '/api';
exports.default = function(app) {

if(config.useMongo){
    app.use(baseAPI+'/users', require('../api/authentication/users-mongo'));
}else{
    app.use(baseAPI+'/users', require('../api/authentication/users-sequelize'));
}
    
app.use(baseAPI+'/posts', require('../api/posts'));


// LASTLINE

}