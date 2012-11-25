module.exports = Generator;
var calculator = require('./index').calculator;
function Generator(){
    this.document = '';
    this.indentation = '';
}

Generator.prototype.build = function(width, gutter, columns, css_class){
    this.openScope("." + css_class);
    this.addStyle({
	position: "relative",
	width: width + "px",
	margin: 'auto'
    });
    this.closeScope();
    var totalColumnWidth = calculator.getTotcalColumnWidth(width, columns, gutter);
    var cellWidth = totalColumnWidth / columns;
    var offset = 0;
    for(i = 1; i <= columns; i++){
	this.openScope(".column-" + i);
	this.addStyle({
	    position: 'absolute',
	    left: '' + offset + 'px'
	});
	this.closeScope();
	offset += cellWidth + gutter;
    }

    return this.document;
}

Generator.prototype.openScope = function(selector){
    this.indentation = '  ';
    this.writeLine(selector + "{");
}

Generator.prototype.closeScope = function(){
    this.indentation = '';
    this.writeLine("}");
}

Generator.prototype.addStyle = function(object){
    var styleDefinition = '';
    var self = this;
    Object.keys(object).map(function(property){
	self.writeLine(self.indentation + property + ": " + object[property] + ";");
    });
}

Generator.prototype.writeLine = function(string){
    this.document += (string + "\n");
}