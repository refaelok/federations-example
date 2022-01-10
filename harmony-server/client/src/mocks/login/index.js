import mockAdapter from '../mockAdapter';
import {config} from '../../config';

// Mock any GET request to /login
// arguments for reply are (status, data, headers)

mockAdapter.onPost(config.ROOT_SERVRE_URL + '/users/login').reply(
	200, {
		id: 1, name: 'John Doe',
	},
	{
		['x-auth']: '1234',
	});