## Server Documentation
## Based Technologies

- <a href="https://github.com/expressjs/express" target="_blank">Express</a>
- <a href="https://github.com/apidoc/apidoc" target="_blank">APIDoc</a>
- <a href="http://mongoosejs.com/" target="_blank">Mongoose</a>
- <a href="http://docs.sequelizejs.com/en/v3/" target="_blank">Sequelize</a>

  
  
## Server Folder Structure

    .
    ├── server    
    |     ├── docs
    |     ├── src       
    |           ├── api
	|               ├── authentication
    |               ├── global
	|               	├── responses
	|               ├── posts
	|           		├── model
	|           		├── responses
	|           		├── index.js
	|           		├── posts.controller.js
	|           ├── middleware
    |               ├── authenticate.js
    |               ├── authenticate-sequelize.js
    |           ├── config.js
    |     ├── apidoc.json  
    |     ├── server.js 




### Workflow

This documentation guide you how to develop with the basic tools for server side, like how to add new api, generate api docs for your server, etc..
* [CONFIG](#config)
* [API](#api)
* [Websocket Actions](#websocket)
<br/>
<a name="config"></a>

Database Configruation located on server/src/config.js
```
const config = {
    sql : {
        db:'seq',
        user:'root',
        pass:''
    },
    mongo: {
        dbUrl:  process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/db'
    },
    useMongo:true,
    useSql: false,
    JWT_SECRET:"OFIRISTHEBEST",
	websocket:{
		port:3030
	},

    allowedActions: [
        actions.FETCH_POSTS
    ]


};

```
change it according to your needs.


<a name="api"></a>

A proper API consist the following:

- Model ( Using Mongoose )
- Controller ( Holding the main functions like create, update, delete, get, etc..)
- Responses ( JS file that contain responses relate to the current API )
- routes ( Mapping the routes to the Controller )

### Creating API 

Inorder to create your API, We suggest to use our CLI script<br/>

``` gulp createApi --name "YOUR_API_NAME" ```

Note - 
If you are going to use MySQL \ SQL \ PostgreSQL \ MSSQL you should add this:
` --apiType sql ` 
otherwise it will use mongodb

It will generate under `server/src/api` folder with the files of your api :

## Usage 

``` gulp createApi --name post ```

## Result 
    .
    ├── post         
    |     ├── post.controller.js                    
    |     ├── index.js   
    |     ├── model   
    |           ├── post.js 
    |     ├── responses
    |           ├── index.js   

## Templating 

If you want to create your own templates you will need to add the template file under `generator/templates/server`
and under `createApi` task in the `gulpfile.js` on the root folder do the following :

```
gulp.task('createApi', () => {
    let apiName = getArg('name');
    if(!validateName(apiName, '--name', false)) return;
    var UPPERCASE_MODEL_NAME = apiName.toString().toUpperCase();
    var CapitalLetterModelName = capitalize(apiName);
    createTemplate(
        './generator/templates/server/api-controller-template',
        'server/src/api/'+apiName+'/'+apiName+'.controller.js',
        {
         name: apiName,
         upperCaseModelName : UPPERCASE_MODEL_NAME,
         capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    createTemplate(
        './generator/templates/server/model-template',
        'server/src/api/'+apiName+'/model/'+apiName+'.js',
        {
            capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    createTemplate(
        './generator/templates/server/responses-template',
        'server/src/api/'+apiName+'/responses/index.js',
        {
         capitalLetterModelName: CapitalLetterModelName,
         upperCaseModelName : UPPERCASE_MODEL_NAME
        }
    );
    
    createTemplate(
        './generator/templates/server/index-template',
        'server/src/api/'+apiName+'/index.js',
        {
         name: apiName,
         capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    /***** YOUR ADDITIONS *****/
    createTemplate(
        './generator/templates/server/YOUR_TEMPLATE_FILE_NAME',
        'server/src/api/'+apiName+'/DESTINATION_FILE_NAME',
        {
         name: apiName,
         capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    replaceText(
        './server/src/routes/index.js',
        './server/src/routes/',
        "// LASTLINE",
        "app.use('/"+apiName+"', require('../api/"+apiName+"'));\r\n// LASTLINE"
    );
    
});
```
<a name="websocket"></a>
## Websocket Actions

> **SECURE WARNING** - You must to declare your `allowed actions` in server config.
If the action is not allowed on the server, the action will not be executed !

- To add allowed actions for broadcasting go to [config](#config) and edit allowedActions 
```
 allowedActions: [
        actions.FETCH_POSTS,
        ...
    ]
```
there is reference in the configuration file to the client actions.
```
const actions = require('../../client/src/actions');
```
harmony let the client to invoke actions on each client on the system by using the websocket instance on the server.
for example: lets say User A delete item from the database and want that all the users will FETCH the items again.

by invoking the following API - ``` POST    /users/broadcastAction   ->  broadcastAction ```
with the this payload : 
```
{type: ActionTypes.FETCH_POSTS, payload: null}
```
the websocket instance will broadcast to all users this action.
In addition, there is option to invoke the broadcasting service from each API.

## Websocket 
You can use the websocket service to pass messages between the clients or from server to clients by invoking:
```js
exports.create = function(req, res) {
    let ModelInstance = new MODEL_SERVICE();
    ...
    req.app.get('wss').broadcast(YOUR_MESSAGE);

```

> For more information go to: [Client](https://github.com/harmony-framework/harmony-boilerplate/blob/master/helperdocs/client.md#websocketactions)

