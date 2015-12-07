'use strict';

let Router=require('express').Router;
let router = new Router();
let controllers = require('../controllers'); //ta implicito que é index.js

router
	.route('/users')
	.get( controllers.users.list)
	.post(controllers.users.create)

router
	.route('/users/:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)


module.exports=router;	