var css_grid = require('./index');
var path = require('path');
function Generator(){
}

module.exports = function(width, gutter, columns, css_class, callback){
    var fs = require('fs');
    fs.readFile(path.join(css_grid.PROJECT_ROOT, 'resources', 'overlay-base.js') , 'utf8', function(err, data){
	if(err){
	    callback(err, null);
	    return;
	}
	callback(null, data);
    });
}

function createOverlay(){
}