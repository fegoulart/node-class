'use strict';


let Users = require('../models/').users;

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
};


function filterByPermission(array){
	//process
	return processData;
}

function list(req,res){
	

	//console.log('entrou aqui');
	/*var users = [
		{name: 'Mateus'},
		{name: "Pedro" }
	];*/
	Users
		.find({},'-__v') //pode usar tb findOne (para trazer so um) simbolo menos é exceto este
		//.exec(function(err,data){}) //metodo de callback - nao é o melhor. Melhor usar promise
		/*.then(function(data) { //professor chamou data de users
			res.json(data);
		})*/
		.then((data)=>res.json(data)) //sintaxe ecma6 para o codigo de cima
		//.then(filterByPermission) 
		/*catch(function(err){ //do try catch 

		}); //
*/

	//res.json(users);
}


function create(req, res) {
  let user = new Users(req.body);
  user
    .save()
    .then(function(status) {
      console.log(status);
       res
        .status(201)
        .json({
          message: 'created'
        });
    }, function(err) {
      console.log(err);
      res.status(400).json({
        message: 'algo errado'
      });
    });
}

function get(req,res) {
	//console.log(req.params.id);

	/*var name=req.params.id;
	var user={ name: name};
	res.json(user);*/

	/*var ObjectId = require('mongodb').ObjectId;
	Users
		.findOneById({_id:ObjectId(req.params.id)})
	res.json(user);
*/
  Users
    .findById(req.params.id)
    .then(function(user) {
      res.json(user);
    });

}

function update(req,res) {
	
	console.log(req.body);
	if (req.body == null || req.body==undefined  ) {
		res.status(204);
	}
	res.json({message:'No content'});
}


function del(req,res) {
	res.status(400);
	res.json({message:'Not found'});
}