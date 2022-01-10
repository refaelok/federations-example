import {takeLatest} from 'redux-saga/effects';
import createApi from '../requests';

/* ------------- Types ------------- */

import { UsersTypes } from '../redux/users';
import { PostsTypes } from '../redux/posts';
import { ChatTypes } from '../redux/chat'; // CODE FOR LIVE EXAMPLE

/* ------------- Sagas ------------- */

import * as sagasUser from './user/saga_user';
import * as sagasPosts from './posts/saga_posts';
import * as sagasChat from './chat/saga_chat'; // CODE FOR LIVE EXAMPLE


const innorlate = createApi();

export default function* () {
	yield [
		takeLatest(UsersTypes.LOGIN, sagasUser.login, innorlate),
		takeLatest(UsersTypes.CREATE_USER, sagasUser.createUser, innorlate),
		takeLatest(PostsTypes.FETCH_POSTS, sagasPosts.fetchPosts, innorlate),
		takeLatest(PostsTypes.FETCH_POST, sagasPosts.fetchPost, innorlate),
		takeLatest(PostsTypes.CREATE_POST, sagasPosts.createPost, innorlate),
		takeLatest(PostsTypes.DELETE_POST, sagasPosts.deletePost, innorlate),

		takeLatest(ChatTypes.SEND_MESSAGE, sagasChat.sendMessage, innorlate) // CODE FOR LIVE EXAMPLE
	];
}