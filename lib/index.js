exports.DEFAULT_CSS_CLASS = 'gridlevel1';
exports.PROJECT_ROOT = require('path').dirname(__dirname);
exports.calculator = require('./Calculator');
exports.overlay = require('./overlay');
exports.Optimizer = require('./Optimizer');
exports.Generator = require('./Generator');
exports.Document = require('./Document');
exports.CssDocument = require('./Css/Document');
exports.generate_rows = require('./generate_rows');
exports.handle_error = function(error){
    console.warn(error);
}
