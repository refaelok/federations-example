## Client Documentation
### Based Libraries
We recommended to be knowledge with the following libraries :
* <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>
* <a href="https://github.com/redux-saga/redux-saga" target="_blank">redux-saga</a>
* <a href="https://github.com/acdlite/redux-promise" target="_blank">redux-promise</a>
* <a href="http://redux-form.com/6.6.3/" target="_blank">redux-form</a>
* <a href="https://www.npmjs.com/package/redux-form-field" target="_blank">redux-form-field</a>
* <a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a>
* <a href="https://www.npmjs.com/package/ws-reconnect-js" target="_blank">ws-reconnect-js</a>
* <a href="https://facebook.github.io/immutable-js/" target="_blank">immutableJS</a>
* <a href="https://github.com/mehmetkose/react-websocket" target="_blank">react-websocket</a>

### Workflow

The example application is a simple service which give you options to view create and delete posts.
This documentation guide you how to develop with the basic tools for client side, like how to add new component, container etc...
* [Config File](#config)
* [Components](#component)
* [Core Components](#coreComponent)
* [Containers](#containers)
* [Form Containers](#formContainers)
* [requests](#requests)
* [Actions](#actions)
* [Reducers](#reducers)
* [Sagas](#sagas)
* [Api](#api)
* [Navigation](#navigation)
* [Utiles](#utiles)
* [Websocket Actions](#websocketactions)
* [i18n](#i18n)

<br/>

## <a name="config"></a>`Config File`

At `( /config.js )` you can define general defaults to your application according to NODE_ENV.

### For Example - Define Root Server Url
```JSX
function initConfig() {

    let config = { };

    if (process.env.NODE_ENV === 'development') {

        /* ---------- Config Development --------- */
        config = {
            ROOT_SERVRE_URL: 'http://localhost:8080/api',
            ROOT_WS_URL: 'ws://localhost:3030'
        };

    }

    else if (process.env.NODE_ENV === 'production') {

        /* ---------- Config Production --------- */
        config = {
            ROOT_SERVRE_URL: 'http://localhost:8080/api',
            ROOT_WS_URL: 'ws://localhost:3030'
        };

    }

    return config;

}

export const config = initConfig();
```


<br/>

## <a name="component"></a>`Components`

Components, not much to say, here your components `( components/ )` or in other words `dump components`,
it means that the component is not connect to `redux` and relay only on `props`.

We recommended to use arrow function for better performance,
But you can also use React Component.

<br/>

> **Component Name** - cli automatically inject `Dmb_` prefix to your component.
this best practice to use prefix name to components to recognize them inside containers.

### Create Component by cli
```
$ gulp createComponent --name MyComponent
```
### create your Component manually
```markdown
1) Go to `component/` folder and add your own component. add `Dmb_` prefix to the component name.
```

<br/>

## <a name="coreComponent"></a>`Core Components`

Core Components under `( components/core/ )`,
include your custom basic components that serve your application.

For example: myInput,  myTextarea, myH1 etc..
Those components created by you and most the time wrap the basic html5 elements with your design and additional elements.

Any core component is wrap with `createField`.<br/>
`createField` convert your component to Filed from `redux-form`, this useful when you use your components inside `Form Container`.<br/>

If you use `createField` your component be able to get the follwoing data:<br/>
`meta: { touched, error, warning }, input` <br/>
this data provide you the information that send from `Form Container` and can serve you for validations and more...

<br/>

> **Core Component Name** - cli automatically inject `Cor_` prefix to your core component.
this best practice to use prefix name to core components to recognize them inside containers.

### Create Core Component by cli
```
$ gulp createCoreComponent --name MyCoreComponent
```
### create your Core Component manually
```markdown
1) Add new folder with the component name to `( components/core/ )`.
2) Create `index.js` file. this is the place to write your component code.
3) Export your component path inside `( Components/core/index.js )`. add `Cor_` prefix to the component name.
4) Now you can import the component from core: `import { Input } from '../../components/core';`
```

#### Example Code
```JSX
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField } from 'redux-form-field';

const component = ({ meta: { touched, error, warning }, input, type, label }) => {

    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/>
                {touched && error}
            </div>
        </div>
    );

};

export default createField(component, {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
});
```
<br/>

## <a name="containers"></a>`Containers`

Containers is the components who is connected to redux.
The flow data in the container is :

without API call:

    Container -> Action -> Reducer -> Container
    
with API call :

    Container -> Action -> Saga -> Reducer -> Container

> **Container** - Creating container with cli will create for you all the 
necessary files to reducers saga and actions.

> **Container** - If --name exist it will create the container `.js` file inside the existing folder.


### Create Container by cli
```
$ gulp createContainer --name myContainer --className myClassName --storeName myStoreName
```
### Create Only Container by cli (without action, saga and reducer)
```
$ gulp createContainerOnly --name myContainer --className myClassName
```
### create your Container manually
```markdown
1) Go to containers folder and add a new `.js` file and connect him to `redux` like in the example.
```

#### Example Code
```JSX
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts/actions_posts';
import { Link } from 'react-router';
import { POSTS_NEW } from '../../routes'

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if(this.props.posts) {
            return this.props.posts.map((post) => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </li>
                );
            });
        }
    }

    render () {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to={POSTS_NEW} className="btn btn-primary" >
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            posts: state.posts.get('all')
        }
    },
    {
        fetchPosts: actions.fetchPosts
    }
)(PostsIndex);
```

<br/>

## <a name="formContainers"></a>`Form Containers`

Form Container is similar to regular container.
The only one diffrent is that Form Container is connected to `redux-form-field`.

Form Container give you the control to display validations, error, warnings, clear form etc...
with easy way.

It work with `Core Components`.

> **Form Container** - Creating form container with cli will create for you all the 
necessary files to reducers saga and actions.

> **Form Container** - If --name exist it will create the container `.js` file inside the existing folder.


### Create Form Container by cli
```
$ gulp createFormContainer --name myContainer --className myClassName --storeName myStoreName
```
### Create Only Form Container by cli (without action, saga and reducer)
```
$ gulp createFormContainerOnly --name myContainer --className myClassName
```
### create your Container manually
```markdown
1) Go to form containers folder and add a new `.js` file and connect him to `connectWithReduxForm` like in the example.
```

#### Example Code
```JSX
import React, { Component } from 'react';
import { connectWithReduxForm } from 'redux-form-field';
import * as actions from '../../actions/posts/actions_posts';
import { Link, browserHistory } from 'react-router';
import { ROOT } from '../../routes';

import { Cor_Input, Cor_Textarea } from '../../components/core';

class PostsNew extends Component {

    componentDidUpdate() {
        if(this.props.newPostCreated && this.props.submitting) {
            this.props.initializePosts();
            browserHistory.push(ROOT);
        }
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))} >

                <h3>Create A New Post</h3>

                <Cor_Input name="title" type="text" label="Title" />
                <Cor_Input name="categories" type="text" label="Categories" />
                <Cor_Textarea name="content" label="Content" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to={ROOT} className="btn btn-danger">Cancel</Link>

            </form>
        );

    }

    handleSubmit(props) {
        return new Promise(() => {
            this.props.createPost(props);
        });
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}


export default connectWithReduxForm(PostsNew,
    (state) => {
        return {
            newPostCreated: state.posts.get('newPostCreated')
        }
    },
    {
        createPost: actions.createPost,
        initializePosts: actions.initializePosts
    },
    {
        form : 'PostsNewForm',
        fields: ['title', 'categories', 'content'],
        validate
    }
);
```

<br/>

## <a name="requests"></a>`requests`

Use Requests `( api/requests.js )` to call API's in action right before you send it to reducers.
Requests is async, Although , you can use it **like it is sync function** right before return type and action.

We prefer encapsulate all the requests via one file `( requests.js )`.
That's give the control to make decisions what happen to any request.

For example, if you want to show loading spinner on any request, or show general server error if occured on the server.

### request parameters
```markdown
1) config - The configuration to axios.
```

#### Example Code
```JSX
request.call({
    method: 'get',
    baseURL: baseURL,
    url: '/posts',
    params: {key: API_KEY}
});
```

<br/>

## <a name="actions"></a>`Actions`

Actions are the place to create the calls to api or just change some state.
In the following files you declare about the actions types and export them.

Create Actions files for each container is the best practice.

Declare `actions types` under `( actions/index.js )`.
```JSX
var UPDATE_MYSTATE = exports.UPDATE_MYSTATE = 'UPDATE_MYSTATE';
```

> **actions type declaration** - Declaration for actions type must to be with es5.
The reason is that the action types is shared with server for websocket actions system.

Declare `actions types` under `( /actions_myActions.js )`.
```JSX
export function updateSomeState (newData) {
    return {
        type: UPDATE_MYSTATE,
        payload: newData
    };
}
```

<br/>

> **actions file names** - cli automatically add your actions file to `/actions/myActionsName/`.
It added 1 file called `actions_myActionsName`. 
`actions_` prefix added automatically

### Create Actions files by cli
```
$ gulp createActionFile --name myActionsName
```
### create your Actions files manually
```markdown
1) Go to `actions/` folder and add your own folder with given name (lowercase first).
2) Add new js file `actions_myActionsName.js`.
3) Go to `actions/index.js` and export there the action type.
```

<br/>

## <a name="reducers"></a>`Reducers`

Reducer is the place to manipulate your states `( reducers/ )`.
We use `immutableJS` to do that. This library have a crazy performance for change objects.
I recommended you to learn how it work even if you are not going to use it.

`index.js` - Here we combine our reducer to redux.

### Create Reducer by cli
```
$ gulp createReducer --name myReducer --store storeName
```
### create your Reducer manually
```markdown
1) Add new folder with the name of the reducer inside `/reducers/` folder.
2) Add new .js file with prefix reducer_ and then the name of the reducer ( same to the folder name )
3) Export your reducer from the file in stage 2.
4) Combine your reducer with the rest inside `reducers/index.js`
```

> **Reducers Name** - cli automatically inject `reducer_` prefix to your reducer.
We also recommended to use same name to the actions.
For example reducer_myName, actions_myName. (cli do it automatically when you create container with cli)

#### `index.js` Example Code
```JSX
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostReducer from './posts/reducer_posts';

const rootReducer = combineReducers({
    form: formReducer,
    posts: PostReducer
});

export default rootReducer;
```

#### `reducer_myReducer` Example Code
```JSX
import { fromJS } from 'immutable';
import { FETCH_POSTS } from '../../actions/posts/actions_types';

const INITIAL_STATE = fromJS({
    all: [], 
    post: null
});

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
            
        case FETCH_POSTS:
            return state.set('all', action.payload.data );

        default:
            return state;
            
    }
}
```

<br/>

## <a name="sagas"></a>`Sagas`

Sagas is middleware between teh Action and the Reducer when action need API call.
In our project we apply the sagas middleware only with 1 root index file.
`sagas/index.js` is the root to all teh sagas you right and inside the `sagas/` folder you add all the folders that
include your saga for each container.

### Create Saga by cli
```
$ gulp createSagaFile --name mySaga
```
### create your Saga manually
```markdown
1) Add new folder with the name of the saga inside `/sagas/` folder.
2) Add new `.js` file with prefix `saga_` and then the name of the saga ( same name as the folder name )
3) Export your saga from the file in stage 2.
4) Combine your saga with the rest inside `sagas/index.js`
```

> **Sagas Name** - cli automatically inject `saga_` prefix to your saga.
We also recommended to use same name to the actions.
For example saga_myName, actions_myName. (cli do it automatically when you create container with cli)

#### `index.js` Example Code
```JSX
import { takeLatest, takeEvery } from 'redux-saga/effects';
import createApi from '../api';
import * as ActionTypes from '../actions';
import { fetchPosts, createPost } from './posts/saga_mySaga'

const innorlate = createApi();

export default function* () {
    yield [
        takeLatest(ActionTypes.FETCH_POSTS, fetchPosts, innorlate),
        takeLatest(ActionTypes.CREATE_POST, createPost, innorlate),
    ]
}
```

#### `saga_mySaga` Example Code
```JSX
import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../../actions';

export function* fetchPosts(api) {

    try {
        const response = yield call(api.fetchPosts);
        yield put({type: ActionTypes.FETCH_POSTS_SUCCESS, posts: response.data});
    } catch (e) {
        yield put({type: ActionTypes.FETCH_POSTS_ERROR, response: e});
    }

}

export function* createPost(api, action) {

    try {
        const response = yield call(api.createPost, action.payload);
        yield put({type: ActionTypes.CREATE_POST_SUCCESS, newPost: response.data});
    } catch (e) {
        yield put({type: ActionTypes.CREATE_POST_ERROR, errorMessage: e});
    }

}
```

<br/>

## <a name="api"></a>`Api`

Inside `api/index.js` you can define all the roots to your apis.
This is not mandatory to use this file, you can add this where ever you want,
but with my experience i prefer all the roots apis to be in one place.


### Add api declaration manually
```markdown
1) Go to `api/index.js` and add your new declaration.
```

#### Example Code
```JSX
import request from './requests';


export default (baseURL = ROOT_URL) => {

    return {

        fetchPosts: () => {
            return request({
                method: 'get',
                baseURL: baseURL,
                url: '/posts',
                params: {key: API_KEY}
            });
        },

        createPost: (data) => {
            return request({
                method: 'post',
                baseURL: baseURL,
                url: '/posts',
                data: data,
                params: {key: API_KEY}
            });
        }

    }

};
```

<br/>

## <a name="navigation"></a>`Navigation`

Navigation is a container that maintain a navigation calls beetwens routes.
Sometimes we want navigate right after success api call or after some action.
So this container help you to do it.

#### Define
```JSX
export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Navigation/>
            </div>
        );
    }
}
```

#### Example Code 
```JSX
export function* createUser(api, action) {

    try {
        yield call(api.createUser, action.payload);
        yield put({type: ActionTypes.NAVIGATE_TO, path: ROOT});
    } catch (e) {
        yield put({type: ActionTypes.CREATE_USER_ERROR, response: e});
    }

}
```

At this example code you can see how to navigate to ROOT application
right after create user in `saga`.

<br/>


## <a name="utiles"></a>`Utiles`

Simple to understand. just add here all your general functions that can serve you entire the application.

## <a name="websocketactions"></a>`Websocket Action`

You have 2 ways to execute specific action to all users via websocket.
The first way is via Server ( see server documentation ).
The second way is via Client using [requests](#requests) object.


> **SECURE WARNING** - You must to declare your `allowed actions` in server config.
If the action is not allowed on the server, the action will not be executed !
See Server documentation.

#### Example Code 
```JSX
export function* deletePost(api, action) {

    try {
        yield call(api.deletePost, action.payload);
        requests.broadcastAction({type: ActionTypes.FETCH_POSTS, payload: null});
        yield put({type: ActionTypes.NAVIGATE_TO, path: PORTAL});
    } catch (e) {
        yield put({type: ActionTypes.DELETE_POST_ERROR, null});
    }

}
```

This example will call to action FETCH_POSTS for all the clients and update there posts list.

<br/>

## <a name="i18n"></a>`i18n`

i18n give you easy way to support with languages and Encapsulate all you titles and static strings in your application 
to one place and easily to rename or change it.

If you are not familiar with `i18n` and you are not sure what is it please read :
<a href="https://en.wikipedia.org/wiki/Internationalization_and_localization" target="_blank">i18n</a>.

In Our boilerplate you can easly add and use i18n with scripts or manually.
To use i18n you need to crate a new Locale (if it is not english) and new i18n folder and file to your
desire container.

In `posts.18n.en.js` (for example) file you can to define your strings for the container.

The following code show the `posts.18n.en.js` inside the container, at `/i18n/`
#### Example Code
```JSX
import { defineMessages } from 'react-intl';

const messages = defineMessages({
    postsTitle: {
        id: 'posts.title',
        defaultMessage: 'Posts',
        description: 'Posts page title',
    },
	addPost: {
        id: 'posts.addPostHeader',
        defaultMessage: 'Add a post',
        description: 'add post button header',
    }
});

export default messages;
```

The following code show you how to use the messages inside your container.
#### Example Code
```JSX
render () {
    return (
        <div>
            <div className="text-xs-right">
                <Link to={POSTS_NEW} className="btn btn-primary" >
                    {translator(this.props.intl,"addPost")}
                </Link>
            </div>
            <h3>{translator(this.props.intl,"postsTitle")}</h3>
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
        </div>
    );
}
```


The following example will add support with new language France,
### Create Locale by cli
```
$ gulp localeCreator --locale fr
```

The following example will add a new i18n `js` file to desire container with to with language fr.
### Create i18n by cli
```
$ gulp i18nCreator --name MyContainerName --locale fr
```

### create your Locale manually
```markdown
1) Go to `/base/i18n/locale` and add your new local `js` file.
2) Go to `/base/i18n/locale/index.js` and import your locale and add it to the message object.
```

### create your i18n manually
```markdown
1) Go to your desire component and add new folder (if not exist) with the name `i18n`.
2) Inside the folder of part 1, add new js file call : `MyContainer.18n.myLocale.js`.
3) Go to `/base/i18n/locale` and import your new i18n file to your desire local.
```
