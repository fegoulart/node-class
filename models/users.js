'use strict';

/*
function lero(){
	return '2015-03-15';
}
*/

let mongoose = require('mongoose');
let Schema = require('mongoose').Schema;

let schema=new Schema({
	firstname: {type:String, required:true},
	email:{type:String, required:true,unique:true},
	//createdAt: {type:Date, set: lero},  //set -> para executar funcao no insert 
	createdAt:{type:Date,set:Date.now}
});


module.exports=mongoose.model('users', schema); //primeiro parametro é o nome da collection