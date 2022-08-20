const hivejs = require('@hiveio/hive-js');


hivejs.api.getBlogEntries("headsink", 10, 3, function(err, data) {
	console.log(err, data);
});
