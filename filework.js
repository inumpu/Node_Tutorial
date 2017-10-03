var testFolder = "./Filestosearch"
var find_occurances= function(string_to_search,callback)
{
	var fs = require('fs');
	var readline = require('readline');
	var stream = require('stream');
	var files_found  = [];
	fs.readdir(testFolder, function(err, files)  {
  		files.forEach(function(file,index) {
		    var instream = fs.createReadStream(testFolder+'/'+file);
			var outstream = new stream;
			var rl = readline.createInterface(instream, outstream);

			rl.on('line', function(line) {
				var pos = line.indexOf(string_to_search);
				 if(pos>=0){
				 	console.log("String found in  "+file);
				 	files_found.push(file);
				 	rl.close();
				 }

			});
			rl.on('close', function() {
			  if(index==files.length-1){
			  	callback(files_found);
			  }
			});
 		});
	})
}

module.exports = {
  find_occurances: find_occurances
}

    
 