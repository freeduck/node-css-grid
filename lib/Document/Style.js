var util = require("util");
var css_grid = require('../index');
module.exports = Style;
function Style(){
    //css_grid.Document(this);
}
Style.prototype = new css_grid.Document;
Style.prototype.addStyle = function(object){
    var styleDefinition = '';
    var self = this;
    Object.keys(object).map(function(property){
	self.writeLine(self.indentation + property + ": " + object[property] + ";");
    });
}

Style.prototype.constructor = Style;

//util.inherits(Style, css_grid.Document);