function Optimizer(){
}



Optimizer.prototype.getOptimalColumnNumbers = function(totalWidth, gutter){
    var numberOfColumnsArray = [];
    for(numberOfColumns = 2; numberOfColumns < totalWidth; numberOfColumns++){
	var totalColumnWidth = (totalWidth - ((numberOfColumns - 1) * gutter));
	if(totalColumnWidth % numberOfColumns != 0){
	    continue;
	}
	numberOfColumnsArray.push(numberOfColumns);
    }
    return numberOfColumnsArray;
}

exports.createOptimizer = function(){return new Optimizer};