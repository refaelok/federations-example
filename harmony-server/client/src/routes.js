import React from 'react';
import {
	Route
} from 'react-router-dom';

/* -------------- Components --------------- */
import App from './components/app';
import PostsIndex from './containers/posts/PostsIndex';
import PostsNew from './containers/posts/PostsNew';
import PostsShow from './containers/posts/PostsShow';
import Login from './containers/user/Login';
import Register from './containers/user/Register';

/* -------------- Routes Paths --------------- */
export const ROOT = '/';
export const REGISTER = '/register';
export const PORTAL = '/portal';
export const POSTS_NEW = '/posts/new';
export const POSTS_SHOW = '/view-post/';

export default (

	<App>
		<Route exact path={ROOT} component={Login}/>
		<Route exact path={REGISTER} component={Register}/>
		<Route exact path={PORTAL} component={PostsIndex}/>
		<Route exact path={POSTS_NEW} component={PostsNew}/>
		<Route exact path={POSTS_SHOW + ':id'} component={PostsShow}/>
	</App>

);



