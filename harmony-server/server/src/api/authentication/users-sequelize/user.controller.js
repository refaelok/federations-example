/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /users              ->  create
 * GET     /users/me           ->  me
 * DELETE  /users/me/logout    ->  logout
 * POST    /users/login        ->  login
 */

import _ from 'lodash';
import User from '/user-model';
import RESPONSES from '../responses';


export const create = (req, res) => {
	let UserInstance = User;
	const body = _.pick(req.body, ['email', 'password']);
	const user = UserInstance.build({
		email: req.body.email,
		password: req.body.password
	});

	return UserInstance.sync({force: false}).then(function () {
		// Table created
		return user.preSave(() => {
			user.save({
				email: req.body.email,
				password: req.body.password
			}).then(() => {
				return user.generateAuthToken();
			}).then((token) => {
				res.header('x-auth', token).send(user);
			}).catch((e) => {
				res.status(403).json(RESPONSES.GENERAL_ERROR);
			});
		});
	});
};

// Get the current user
export const me = (req, res) => {
	res.send(req.user);
};

export const login = async (req, res) => {
	try {
		var body = _.pick(req.body, ['email', 'password']);

		const user = await User.findByCredentials(body.email, body.password);

		return user.generateAuthToken().then((token) => {
			res.header('x-auth', token).send(user);
		});
	} catch (e) {
		res.status(403).send();
	}
};


export const logout = function (req, res) {
	return req.user.removeTokenLogout(req.token).then((result) => {
		res.status(200).send();
	}).catch((e) => {

		res.status(403).send();
	});
};