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

let config = require('./config.js');

//console.log(config);




app.use('/api',routers.api);

let mongoose = require('mongoose');

//template block. o que vc poem dentro de ${} é javascript
let urlDb=`mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(urlDb);
	
mongoose.connection.once('open', function () {

	//app.listen(3000, serverLogInit);
	app.listen(3000, ()=>console.log('> localhost:3000'));


});


mongoose.connection.on('error',function(err){
	console.log('database connection error');
});


//app.listen(3000, serverLogInit);

function serverLogInit() {
	//console.log(process.env);
	console.log('> localhost:3000');

}

module.exports = app;