import { createBrowserHistory, createHashHistory } from 'history';

const historyObject = (window.cordova) ? createHashHistory({ basename: '/app1' }) : createBrowserHistory({ basename: '/app1' });

export default historyObject;
