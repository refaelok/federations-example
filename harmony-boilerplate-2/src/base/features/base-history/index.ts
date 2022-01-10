import { createBrowserHistory, createHashHistory } from 'history';

const historyObject = (window.cordova) ? createHashHistory({ basename: '/app2' }) : createBrowserHistory({ basename: '/app2' });

export default historyObject;
