const hivejs = require('@hiveio/hive-js');

const getPosts = async () => {
try{
	await hivejs.api.getBlog("headsink", 10, 3, function(err, data) {
		console.log(err, data, "success");
	});
}
catch{
	console.error("dead " + err);
}
}

getPosts();

