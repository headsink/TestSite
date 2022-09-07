const hivejs = require('@hiveio/hive-js');
const getPostsEntries = async () => {
try{
	await hivejs.api.getBlogEntries("headsink", 10, 3, function(err, data) {
		if(!data[0].blog){
			console.log(err,"fail");
		}else{
			console.log(err,"success");
			console.table(data);
		}
		console.timeEnd("getPost time:");
	});
}
catch{
	console.error("dead " + err);
}
}
console.time("getPost time:");
getPostsEntries();

