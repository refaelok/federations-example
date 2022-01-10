import sessionStorage from 'redux-persist/lib/storage/session';

export const cartPersistConfig = {
	storage: sessionStorage,
	key: 'cart',
	throttle: 250,
	blackList: []
};
