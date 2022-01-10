import {call, put} from 'redux-saga/effects';
import PostsActions, {PostsTypes} from '../../redux/posts';
import requests from '../../base/api/requests';
import {PORTAL} from '../../routes';
import history from '../../base/features/base-history';

export function* fetchPosts(api, /* action */) {

	try {
		const response = yield call(api.fetchPosts);

		if (response.data && response.data.length > 0) {
			yield put(PostsActions.fetchPostsSuccess(response.data));
		} else {
			yield put(PostsActions.fetchPostsError(response.data.message));
		}
	} catch (e) {
		yield put(PostsActions.fetchPostsError(e));
	}

}

export function* fetchPost(api, action) {

	try {
		const response = yield call(api.fetchPost, action.id);
		yield put(PostsActions.fetchPostSuccess(response.data[0]));
	} catch (e) {
		yield put(PostsActions.fetchPostError(e));
	}

}

export function* createPost(api, action) {

	try {
		const response = yield call(api.createPost, action.post);
		if (response.data.message === 'Resource created') {
			requests.broadcastAction({type: PostsTypes.FETCH_POSTS, payload: null});
			history.push(PORTAL);
		} else {
			yield put(PostsActions.createPostError(response.data.message));
		}
	} catch (e) {
		yield put(PostsActions.createPostError(e));
	}

}

export function* deletePost(api, action) {

	try {
		yield call(api.deletePost, action.id);
		requests.broadcastAction({type: PostsActions.FETCH_POSTS, payload: null});
		history.push(PORTAL);
	} catch (e) {
		yield put(PostsActions.deletePostError());
	}

}