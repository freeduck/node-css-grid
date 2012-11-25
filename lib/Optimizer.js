module.exports =  Optimizer;
var calculator = require('./index').calculator;
function Optimizer(){
}

Optimizer.prototype.getOptimalColumnNumbers = function(totalWidth, gutter){
    var numberOfColumnsArray = [];
    for(numberOfColumns = 2; numberOfColumns < totalWidth; numberOfColumns++){
	var totalColumnWidth = calculator.getTotcalColumnWidth(totalWidth, numberOfColumns, gutter);
	if(totalColumnWidth % numberOfColumns != 0){
	    continue;
	}
	numberOfColumnsArray.push(numberOfColumns);
    }
    return numberOfColumnsArray;
}

