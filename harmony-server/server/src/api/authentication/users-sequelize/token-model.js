import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import bcrypt from 'bcryptjs';
import Sequelize from 'sequelize';
import config from '../../../config';

const sequelize = new Sequelize(config.sql.db, config.sql.user, config.sql.pass, {logging: false});
const TokensSchema = sequelize.define('Tokens', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	access: {
		type: Sequelize.STRING

	},
	token: {
		type: Sequelize.STRING
	}

});


export default TokensSchema;