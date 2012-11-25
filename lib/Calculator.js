module.exports = {
    getTotcalColumnWidth: function(totalWidth, numberOfColumns, gutter){
	return (totalWidth - ((numberOfColumns - 1) * gutter));
    }
};