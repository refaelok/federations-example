/**
 * Here you add all the apis urls defenition
 */

import request from '../base/api/requests';
import {config} from '../config';

export default (baseURL = config.ROOT_SERVRE_URL) => {

	return {

		login: (data) => {
			return request.call({
				method: 'post',
				baseURL: baseURL,
				url: 'users/login',
				data: data
			});
		},

		createUser: (data) => {
			return request.call({
				method: 'post',
				baseURL: baseURL,
				url: '/users',
				data: data
			});
		},

		fetchPosts: () => {
			return request.call({
				method: 'get',
				baseURL: baseURL,
				url: '/posts'
			});
		},

		fetchPost: (id) => {
			return request.call({
				method: 'get',
				baseURL: baseURL,
				url: '/posts/' + id
			});
		},

		createPost: (data) => {
			return request.call({
				method: 'post',
				baseURL: baseURL,
				url: '/posts',
				data: data
			});
		},

		deletePost: (id) => {
			return request.call({
				method: 'delete',
				baseURL: baseURL,
				url: '/posts/' + id
			});
		}

	};

};