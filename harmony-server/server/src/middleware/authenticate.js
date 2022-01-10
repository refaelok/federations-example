const User = require('./../api/authentication/users-mongo/user-model');

var authenticate = async (req, res, next) => {
	try {
		let token = req.header('Authorization');

		const user = await User.findByToken(token);

		if (!user) {
			return new Promise((resolve, reject) => {
				reject();
			});
		}

		req.user = user;
		req.token = token;
		next();
	} catch (e) {
		console.log(e);
		res.status(401).send();
	}
};

module.exports = {authenticate}