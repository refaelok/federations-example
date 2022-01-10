const {Router} = require('express');
const {authenticate} = require('./../../middleware/authenticate');

const controller = require('./posts.controller');

var router = new Router();

/**
 * @api {post} /posts Create Post
 * @apiName CreatePosts
 * @apiGroup Posts
 *
 * @apiParam {String} name .
 *
 * @apiSuccess {Object} - contain message and resource id.
 */
router.post('/', authenticate, controller.create);

/**
 * @api {get} /posts Get Posts
 * @apiName GetAllPosts
 * @apiGroup Posts
 * @apiSuccess {Object} - contain items from resource.
 */
router.get('/', authenticate, controller.getAll);

/**
 * @api {get} /posts/:id  Get Post
 * @apiName GetPostsById
 * @apiGroup Posts
 *
 * @apiParam {String} id .
 *
 * @apiSuccess {Object} - resource.
 */
router.get('/:posts_id', authenticate, controller.getByID);

/**
 * @api {delete} /posts/:id  Delete Post
 * @apiName RemovePostsById
 * @apiGroup Posts
 *
 * @apiParam {String} id .
 *
 * @apiSuccess {Object} - contain message.
 */
router.delete('/:posts_id', authenticate, controller.removeByID);


module.exports = router;