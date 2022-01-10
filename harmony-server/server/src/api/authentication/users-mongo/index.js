const {Router} = require('express');

const controller = require('./user.controller');
const {authenticate} = require('./../../../middleware/authenticate');

var router = new Router();

/**
 * @api {post} authentication/users/ Create User
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
 * @apiSuccess {Object} - status 200.
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
/**
 * @api {post} /authentication/users/broadcastAction Broadcast Action
 * @apiName BroadcastAction
 * @apiGroup User

 * @apiParam {Object} action with type and payload.

 * @apiSuccess {Object} - broadcast to thethe action to all.
 */
router.post('/broadcastAction', controller.broadcastAction);



module.exports = router;