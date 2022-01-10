import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	initialPosts: null,
	fetchPosts: null,
	fetchPostsSuccess: ['posts', 'message'],
	fetchPostsError: null,
	fetchPost: ['id'],
	fetchPostSuccess: ['post'],
	fetchPostError: ['errorMessage'],
	createPost: ['post'],
	createPostError: ['message'],
	deletePost: ['id'],
	deletePostError: null
});

export const PostsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
	all: [],
	post: null,
	message: null,
	navigateTo: null
});

/* ------------- Selectors ------------- */

export const PostsSelector = {
	all: state => state.posts.all,
	post: state => state.posts.post,
	message: state => state.posts.message,
	navigateTo: state => state.posts.navigateTo
};

/* ------------- Reducers ------------- */

const initialStateReducer = () => {
	return INITIAL_STATE;
};

const fetchPostsSuccessReducer = (state, action) => {
	const { posts, message } = action;
	return state.merge({ all: posts, message });
};

const fetchPostsErrorReducer = (state) => {
	return state.merge({ message:  'some server error occurred' });
};

const fetchPostSuccessReducer = (state, action) => {
	const { post } = action;
	return state.merge({ post });
};

const fetchPostErrorReducer = (state, action) => {
	const { errorMessage } = action;
	return state.merge({ errorMessage });
};

const createPostErrorReducer = (state, action) => {
	const { message } = action;
	return state.merge({ message });
};

const deletePostErrorReducer = (state) => {
	return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.INITIAL_POSTS]: initialStateReducer,
	[Types.FETCH_POSTS_SUCCESS]: fetchPostsSuccessReducer,
	[Types.FETCH_POSTS_ERROR]: fetchPostsErrorReducer,
	[Types.FETCH_POST_SUCCESS]: fetchPostSuccessReducer,
	[Types.FETCH_POST_ERROR]: fetchPostErrorReducer,
	[Types.CREATE_POST_ERROR]: createPostErrorReducer,
	[Types.DELETE_POST_ERROR]: deletePostErrorReducer
});
