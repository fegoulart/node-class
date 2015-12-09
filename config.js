'use strict';

let config = {
		development:  {
			db: {
				host:'localhost',
				port:27017,
				name:'test_application'
			}
		},
		production: {
			db : {
				host:'localhost',
				port: 27017,
				name: 'application'
			}
		}
}



//se nao for passado o parametro NODE_ENV, assume development
let env = process.env.NODE_ENV || 'development';

module.exports = config[env];