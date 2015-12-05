'use strict';


let app = require('../../app.js');
let request = require('supertest');
let chai=require('chai');

let expect = chai.expect;

chai.use(require('chai-things'));

describe('Users controller', function(){
	describe('.list - Get /users', function(){
		it('should return a json array test', function(done) {
			request(app)
				.get('/users')
				.end(function(err,res){
					//console.log(res);
					//console.log(res.statusCode ,res.body);
					//res.statusCode.should.be.an('array');
					expect(res.statusCode).to.be.equal(200);	
					expect(res.body).to.be.an('array');
					expect(res.body)
						.all.have.property('name')
						//.to.be.an('string');


					done();
				});
		});
		it('test de comportamento 2', function() {

		});
	});
});