import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	createUser: ['data'],
	createUserError: ['response'],
	login: ['data'],
	loginSuccess: ['details'],
	loginError: ['loginError'],
});

export const UsersTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
	details: null,
	loginError: null,
	registerError: ''
});

/* ------------- Selectors ------------- */

export const usersSelector = {
	details: state => state.users.details,
	loginError: state => state.users.loginError,
	registerError: state => state.users.registerError
};

/* ------------- Reducers ------------- */

const loginSuccessReducer = (state, action) => {
	const { details } = action;
	return state.merge({ details });
};

const loginErrorReducer = (state, action) => {
	const { loginError } = action;
	return state.merge({ loginError });
};

const createUserErrorReducer = (state, action) => {
	const { response } = action;
	return state.merge({ registerError: response });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.LOGIN_SUCCESS]: loginSuccessReducer,
	[Types.LOGIN_ERROR]: loginErrorReducer,
	[Types.CREATE_USER_ERROR]: createUserErrorReducer
});
