import { PostsTypes } from '../../client/src/redux/posts';
import { ChatTypes } from '../../client/src/redux/chat';

const config = {
	sql: {
		db: 'seq',
		user: 'root',
		pass: ''
	},
	mongo: {
		dbUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/db'
	},
	useMongo: true,
	useSql: false,
	JWT_SECRET: "OFIRISTHEBEST",
	server: {
		port: process.env.PORT || 8080
	},
	websocket: {
		port: process.env.WS_PORT || 3030
	},

	allowedActions: [
		PostsTypes.FETCH_POSTS,
		ChatTypes.RECEIVE_MESSAGE, // CODE FOR LIVE EXAMPLE
		ChatTypes.RENDER_PICACHO // PICACHO EXAMPLE
	]


};

module.exports = config;