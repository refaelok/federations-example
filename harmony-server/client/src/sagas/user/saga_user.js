import {call, put} from 'redux-saga/effects';
import {ROOT, PORTAL} from '../../routes';
import UsersActions from '../../redux/users';
import request from '../../base/api/requests';
import history from '../../base/features/base-history';


export function* login(api, action) {

	try {
		const response = yield call(api.login, action.data);
		let AUTH_TOKEN = response.headers['x-auth'];

		if (AUTH_TOKEN) {
			response.data.Authorization = AUTH_TOKEN;
			request.setCommonHeader('Authorization', AUTH_TOKEN);

			sessionStorage.setItem('user', JSON.stringify(response.data));

			yield put(UsersActions.loginSuccess(response.data));

			history.push(PORTAL);
		} else {
			yield put(UsersActions.loginError(response.data));
		}

	} catch (e) {
		yield put(UsersActions.loginError(e.data && e.data.message ? e.data.message : ''));
	}

}

export function* createUser(api, action) {

	try {
		yield call(api.createUser, action.data);

		history.push(ROOT);
	} catch (e) {
		yield put(UsersActions.createUserError(e.data && e.data.message ? e.data.message : ''));
	}

}
