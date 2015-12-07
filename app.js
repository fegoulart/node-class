'use strict';

var express = require('express');

var app = express();
/*var controllers = require('./controllers'); //ta implicito que é index.js

app
	.route('/users')
	.get( controllers.users.list)
	.post(controllers.users.create)

app
	.route('/users/:id')
	.get(controllers.users.get)
	.put(controllers.users.update)
	.delete(controllers.users.delete)
*/

//todos roteadores que eu tenho
let routers = require('./routers/');// (index.js)

app.use('/api',routers.api);


app.listen(3000, serverLogInit);

function serverLogInit() {
	//console.log(process.env);
	console.log('> localhost:3000');

}

module.exports = app;