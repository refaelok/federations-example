import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import Sequelize from 'sequelize';
import config from '../../../config';
import TokensService from './token-model';

const sequelize = new Sequelize(config.sql.db, config.sql.user, config.sql.pass, {logging: false});


const UserSchema = sequelize.define('User', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			validate: {
				isEmail: true            // checks for email format (foo@bar.com)
			}
		},
		password: {
			type: Sequelize.STRING,
			validate: {
				min: 6
			}
		}
	},
	{
		instanceMethods: {
			toJSON: function () {
				var user = this;


				return {
					id: user.get('id'),
					email: user.get('email')
				};
			},
			generateAuthToken: function () {

				var user = this;
				var access = 'auth';

				var token = jwt.sign({
					id: user.get('id').toString(),
					access
				}, process.env.JWT_SECRET || config.JWT_SECRET).toString();
				let TokensInstance = TokensService;

				return TokensInstance.sync({force: false}).then(() => {
					return TokensInstance.find({where: {UserId: user.get('id')}}).then((token_find) => {
						if (token_find) {

							return token_find.update({token: token}).then((res) => {

								return token;
							});
						} else {
							return TokensInstance.create({access: access, token: token}).then((token_model) => {

								user.setToken(token_model).then(() => {
									user.save().then(() => {
										return token;
									});
								});
							});
						}

					}).catch((e) => {

					});

				});


			},
			removeTokenLogout: function (token) {
				var user = this;
				let TokensInstance = TokensService;
				return TokensInstance.find({token: token}).then((token_model) => {

					return token_model.update({
						token: '',
						where: {
							UserId: user.get('id')
						}
					});
				});

			},

			preSave: function (cb) {
				var user = this;
				if (user.get('password')) {

					bcrypt.genSalt(10, (err, salt) => {
						bcrypt.hash(user.password, salt, (err, hash) => {
							user.password = hash;

							cb();
						});
					});

				} else {
					cb();
				}
			}

		},
		classMethods: {
			findByCredentials: function (email, password) {
				var User = this;

				return User.findOne({where: {email: email}}).then((user) => {
					if (!user) {
						return Promise.reject();
					}

					return new Promise((resolve, reject) => {
						bcrypt.compare(password, user.get('password'), (err, res) => {

							if (res) {
								resolve(user);
							} else {
								reject();
							}
						});
					});
				});
			},
			findByToken: function (token) {
				var User = this;
				var decoded;

				try {
					decoded = jwt.verify(token, process.env.JWT_SECRET || config.JWT_SECRET);

				} catch (e) {

					return new Promise((resolve, reject) => {
						reject();
					});
				}

				return TokensService.find(
					{
						where: {
							'UserId': decoded.id,
							'token': token,
							'access': 'auth'
						}
					}).then((token_model) => {
					return User.findOne(
						{
							where: {
								id: token_model.get('UserId')

							},
							attributes: {
								exclude: ['password']
							}
						}
					).then((user) => {

						return user;
					});
				});

			}
		},
		freezeTableName: true // Model tableName will be the same as the model name
	});
UserSchema.hasOne(TokensService);


module.exports = UserSchema;