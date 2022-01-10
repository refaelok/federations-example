/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /posts               ->  create
 * GET     /posts               ->  getAll
 * GET     /posts /:id          ->  getByID
 * DELETE  /posts /:id          ->  removeByID
 * PATCH   /posts /:id          ->  updateByID
 */

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const GLOBAL_RESPONSES = require("../global/responses");
const LOCAL_RESPONSES = require("./responses");
const MODEL_PATH = './model/posts';
const MODEL_SERVICE = require(MODEL_PATH);
const IGNORE_FIELDS = {'_id': 0, '__v': 0};

exports.create = function (req, res) {
	let ModelInstance = new MODEL_SERVICE();

	ModelInstance.content = req.body.content;
	ModelInstance.categories = req.body.categories;
	ModelInstance.title = req.body.title;
	ModelInstance.save().then((posts) => {
		let resultResponse = GLOBAL_RESPONSES.CREATE_SUCCESS;
		resultResponse.resourceId = posts._id;
		res.json(resultResponse);


	}).catch((e) => {
		res.send(e);
	});

};


exports.getAll = function (req, res) {
	try {
		MODEL_SERVICE.find({}).limit(40).exec(function (err, posts_result) {
			if (posts_result && posts_result.length == 0) {
				let resultResponse = LOCAL_RESPONSES.POSTS_NOT_FOUND;
				resultResponse.posts = [];
				res.json(resultResponse);
				return;
			}

			res.json(posts_result);
		});
	} catch (e) {
		res.json(LOCAL_RESPONSES.POSTS_NOT_FOUND);
	}
};


exports.getByID = function (req, res) {
	MODEL_SERVICE.find({
		_id: req.params.posts_id
	}).then((posts) => {
		if (!posts || (posts && posts.length == 0)) {
			res.json(LOCAL_RESPONSES.POSTS_NOT_FOUND);
		}

		res.json(posts);
	}).catch((err) => {
		res.send(err);
	});
};


exports.removeByID = function (req, res) {
	MODEL_SERVICE.remove({
		_id: req.params.posts_id
	}).then((result) => {
		let resultResponse = GLOBAL_RESPONSES.DELETE_SUCCESS;
		res.json(resultResponse);
	}).catch((err) => {
		res.send(err);
	});
};


