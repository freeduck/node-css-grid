var util = require("util");
var css_grid = require('../index');
module.exports = Document;
function Document(){
    //css_grid.Document(this);
}
Document.prototype = new css_grid.Document;
Document.prototype.addStyle = function(object){
    var styleDefinition = '';
    var self = this;
    Object.keys(object).map(function(property){
	self.writeLine(self.indentation + property + ": " + object[property] + ";");
    });
}

Document.prototype.constructor = Document;

//util.inherits(Style, css_grid.Document);
