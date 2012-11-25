var css_grid = require('./index');
var path = require('path');
var util = require('util');
function Generator(doc){
    this.document = doc;
}

module.exports = function(width, gutter, columns, css_class, callback){
    var fs = require('fs');
    fs.readFile(path.join(css_grid.PROJECT_ROOT, 'resources', 'overlay-base.js') , 'utf8', function(err, data){
	if(err){
	    callback(err, null);
	    return;
	}
	var doc = new css_grid.Document(data);
	var generator =new  Generator(doc);
	generator.cssClass = css_class;
	generator.width = width;
	generator.gutter = gutter;
	generator.createOverlay(function(err, data){
	    if(err){
		callback(err, null);
		return;
	    }
	    callback(null, util.format('%s', data));
	});
    });
}

Generator.prototype.createOverlay = function(callback){
    this.document.openScope('(function()');
    this.document.writeStatement('var gridOutline = window.createElement("div");');
    this.document.writeStatement('gridOutline.setAttribute("style", "width: ' + (this.width + (this.gutter * 2)) + 'px; margin: auto;background-color: grey; opacity: 0.5");');
    this.document.writeStatement('dev_css_grid.overlay.appendChild(gridOutline);');
    this.document.closeScope('})();');
    callback(null, this.document);
}