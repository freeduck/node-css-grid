var css_grid = require('./index');
var path = require('path');
var util = require('util');
var calculator = require('./index').calculator;
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
	generator.columnCount = columns;
	generator.columnWidth = calculator.getTotcalColumnWidth(width, columns, gutter) / columns;
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
    this.document.writeStatement('var gridOutline = window.document.createElement("div");');
    this.document.writeStatement('gridOutline.setAttribute("style", "width: '
				 + (this.width + (this.gutter * 2))
				 + 'px; margin: auto;background-color: blue; height: 100%");');

    this.document.writeStatement('var grid = window.document.createElement("div");');
    this.document.writeStatement('grid.setAttribute("class", "' + this.cssClass + '");');
    this.document.writeStatement('grid.setAttribute("style", "height: 100%;")');
    this.document.writeStatement('dev_css_grid.gridElement = gridOutline;');
    this.document.writeStatement('var column = false;');
    for(i = 1; i <= this.columnCount; i++){
	this.document.writeStatement('column = window.document.createElement("div");');
	this.document.writeStatement('column.setAttribute("class", "column-' + i + '");');
	this.document.writeStatement('column.setAttribute("style", "height: 100%; width: ' + this.columnWidth + 'px; background-color: yellow");');
	this.document.writeStatement('column.setAttribute("onclick", "alert(this.getAttribute(\'class\'));");');
	this.document.writeStatement('grid.appendChild(column);');
    }
    this.document.writeStatement('gridOutline.appendChild(grid);');
    this.document.closeScope('})();');
    callback(null, this.document);
}