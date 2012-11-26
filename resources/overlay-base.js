var dev_css_grid = dev_css_grid || {};
(function(){
    function getBody(callback){
	var bodyArray = document.getElementsByTagName('body');
	if(bodyArray.length == 0){
	    setTimeout(function(){getBody(callback);}, 100);
	    return;
	}
	callback(bodyArray.item(0));
    }
    var overlay = window.document.createElement('div');
    overlay.setAttribute('style', 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: grey; opacity: 0.5');

    getBody(function(body){
	body.appendChild(overlay);
	overlay.appendChild(dev_css_grid.gridElement);
    });
})();
