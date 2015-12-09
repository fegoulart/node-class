'use strict';

let Router=require('express').Router;
let router = new Router();
let controllers = require('../controllers'); //ta implicito que é index.js
let bodyParser = require('body-parser');

let multer = require('multer')({dest: './uploads'});

//aceitar urlencode, json e multipart
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
router.use(multer.array());

router
	.route('/users')
	//posso passar um middleware antes de tratar o get
	//.get(lero, controllers.users.list)
	.get( controllers.users.list)
	.post(controllers.users.create)

router
	.route('/users/:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)


module.exports=router;	