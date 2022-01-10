const User = require('./../api/authentication/users-sequelize/user-model');

var authenticate = (req, res, next) => {
	let token = req.header('Authorization');
	User.findByToken(token).then((user) => {

		if (!user) {
			return new Promise((resolve, reject) => {
				reject();
			});
		}

		req.user = user;
		req.token = token;
		next();

	}).catch((e) => {
		console.log(e);
		res.status(401).send();

	});
};

module.exports = {authenticate}