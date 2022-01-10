define({ "api": [
  {
    "type": "post",
    "url": "/posts",
    "title": "Create Post",
    "name": "CreatePosts",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain message and resource id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/posts/index.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/posts"
      }
    ]
  },
  {
    "type": "get",
    "url": "/posts",
    "title": "Get Posts",
    "name": "GetAllPosts",
    "group": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain items from resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/posts/index.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/posts"
      }
    ]
  },
  {
    "type": "get",
    "url": "/posts/:id",
    "title": "Get Post",
    "name": "GetPostsById",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>resource.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/posts/index.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/posts/:id"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/posts/:id",
    "title": "Delete Post",
    "name": "RemovePostsById",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>contain message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/posts/index.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/posts/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/authentication/users/",
    "title": "Create User",
    "name": "CreateUserToken",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-sequelize/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/"
      }
    ]
  },
  {
    "type": "post",
    "url": "authentication/users/",
    "title": "Create User",
    "name": "CreateUserToken",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-mongo/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/apiauthentication/users/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/authentication/users/me",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>get current user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-mongo/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/me"
      }
    ]
  },
  {
    "type": "get",
    "url": "/authentication/users/me",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>get current user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-sequelize/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/me"
      }
    ]
  },
  {
    "type": "post",
    "url": "/authentication/users/login",
    "title": "Login",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-sequelize/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/authentication/users/login",
    "title": "Login",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>set header x-auth with generated token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-mongo/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/login"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/authentication/users/me/token",
    "title": "Logout",
    "name": "LogoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>status 200.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-mongo/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/me/token"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/authentication/users/me/token",
    "title": "Logout",
    "name": "LogoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "-",
            "description": "<p>delete current token - status 200.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/authentication/users-sequelize/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "https://127.0.0.1/api/authentication/users/me/token"
      }
    ]
  }
] });
