var css_grid = require('./index');
var util = require('util');
module.exports = function(row_height, line_height, line_count, css_class, callback){
    var doc = new css_grid.CssDocument();
    var offset = 0;
    for(var i = 1; i <= line_count; i++){
	doc.openScope('.' + css_class + ' .row-' + i);
	doc.addStyle({"top": [offset, "px"].join('')});
	doc.closeScope();
	offset += (row_height + line_height);
    }
    callback(null, util.format('%s', doc));
}