const {Router} = require('express');

const controller = require('./user.controller');
const {authenticate} = require('./../../../middleware/authenticate-sequelize');
var router = new Router();

/**
 * @api {post} /authentication/users/ Create User
 * @apiName CreateUserToken
 * @apiGroup User
 *
 * @apiParam {String} email .
 * @apiParam {String} password .
 *
 * @apiSuccess {Object} - set header x-auth with generated token.
 */
router.post('/', controller.create);
/**
 * @api {get} /authentication/users/me Get User
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {Object} - get current user.
 */
router.get('/me', authenticate, controller.me);
/**
 * @api {delete} /authentication/users/me/token Logout
 * @apiName LogoutUser
 * @apiGroup User
 *
 * @apiSuccess {Object} - delete current token - status 200.
 */
router.delete('/me/token', authenticate, controller.logout);
/**
 * @api {post} /authentication/users/login Login
 * @apiName LoginUser
 * @apiGroup User

 * @apiParam {String} email .
 * @apiParam {String} password .

 * @apiSuccess {Object} - set header x-auth with generated token.
 */
router.post('/login', controller.login);

export default router;