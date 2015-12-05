'use scrict';

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	delete: del
};

function list(req,res){
	var users = [
		{name: 'Mateus'},
		{name: "Pedro" }
	];
	res.json(users);
}

function create(req,res) {

	res.status(201)
	.json({
		message:'created'
	});
}

function get(req,res) {
	//console.log(req.params.id);

	var name=req.params.id;
	var user={ name: name};
	res.json(user);

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